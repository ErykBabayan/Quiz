import React from "react";
import IntroPage from "./Components/IntroPage";
import Quiz from "./Components/Quiz";

function App() {
	const [isStarted, setIsStarted] = React.useState(false);
	const [isGameFinished, setIsGameFinished] = React.useState(false);
	const [quiz, setQuiz] = React.useState([]);

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
						correctAnswer: info.correct_answer,
						allAnswers: shuffleAnswers(allAnswers),
						userAnswer: "",
						isChecked: false,
					};
					quizArray.push(quizElement);
				});
				setQuiz(quizArray);
			});
	}, []);

	function startQuiz() {
		setIsStarted((prevIsStarted) => !prevIsStarted);
	}

	function shuffleAnswers(arr) {
		return arr.sort(() => Math.random() - 0.5);
	}

	function handleGame() {
		setIsGameFinished((previsGameFinished) => !previsGameFinished);
		countScore();
	}

	function countScore() {
		let finalScore = 0;
		quiz.map((item) => {
			if (item.userAnswer === item.correctAnswer) {
				finalScore++;
			}
		});
		return finalScore;
	}

	function handleAnswerClick(event) {
		const { name, value, checked } = event.target;
		const newArray = [];

		console.log(quiz);
		if (!isGameFinished) {
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
			setQuiz(newArray);
		}
	}

	const renderQuiz = !isStarted ? (
		<IntroPage start={() => startQuiz()} />
	) : (
		<Quiz quiz={quiz} gameStatus={isGameFinished} handleAnswerClick={handleAnswerClick} handleGame={handleGame} />
	);

	return <div>{renderQuiz}</div>;
}

export default App;
