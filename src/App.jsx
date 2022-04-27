import React from "react";
import IntroPage from "./Components/IntroPage";
import Quiz from "./Components/Quiz";

function App() {
	const [isStarted, setIsStarted] = React.useState(false);
	const [quiz, setQuiz] = React.useState([]);

	function startQuiz() {
		setIsStarted((prevIsStarted) => !prevIsStarted);
	}

	function shuffleAnswers(arr) {
		return arr.sort(() => Math.random() - 0.5);
	}

	React.useEffect(() => {
		fetch("https://opentdb.com/api.php?amount=5")
			.then((res) => res.json())
			.then((data) => {
				const quizArray = [];

				data.results.map((info, index) => {
					const allAnswers = info.incorrect_answers.concat(info.correct_answer);
					const quizElement = {
						id: index,
						question: info.question,
						allAnswers: shuffleAnswers(allAnswers),
						userAnswer: "",
						isChecked: false,
					};
					quizArray.push(quizElement);
				});
				setQuiz(quizArray);
			});
	}, []);

	function handleAnswerClick(event) {
		const { name, value, type, checked } = event.target;
		const newArray = [];

		//console.log(quiz);

		quiz.forEach((item) => {
			if (item.id == name) {
				item = {
					...item,
					userAnswer: value,
					isChecked: checked,
				};
				newArray.push(item);
			} else {
				newArray.push(item);
			}
		});
		//	console.log(quiz);
		setQuiz(newArray);
	}

	const renderQuiz = !isStarted ? <IntroPage start={() => startQuiz()} /> : <Quiz quiz={quiz} handleAnswerClick={handleAnswerClick} />;

	return <div>{renderQuiz}</div>;
}

export default App;
