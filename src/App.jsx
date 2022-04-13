import { render } from "@testing-library/react";
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
					};
					quizArray.push(quizElement);
				});
				setQuiz(quizArray);
			});
	}, []);

	const renderQuiz = !isStarted ? <IntroPage start={() => startQuiz()} /> : <Quiz quiz={quiz} quizState={setQuiz} />;

	//console.log(quiz);

	return <div>{renderQuiz}</div>;
}

export default App;
