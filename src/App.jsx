import React from "react";
import IntroPage from "./Components/IntroPage";
import Quiz from "./Components/Quiz";

function App() {
	const [isStarted, setIsStarted] = React.useState(false);
	const [isGameFinished, setIsGameFinished] = React.useState(false);
	const [quiz, setQuiz] = React.useState([]);
	const [newGame, setNewGame] = React.useState(false);

	React.useEffect(() => {
		fetch("https://opentdb.com/api.php?amount=5")
			.then((res) => res.json())
			.then((data) => {
				const quizArray = [];

				data.results.forEach((info, index) => {
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
	}, [newGame]);

	let score;
	if (isGameFinished) {
		score = countScore();
	}

	function startQuiz() {
		setIsStarted((prevIsStarted) => !prevIsStarted);
	}

	function shuffleAnswers(arr) {
		return arr.sort(() => Math.random() - 0.5);
	}

	function handleGame() {
		setIsGameFinished((prevIsGameFinished) => !prevIsGameFinished);
	}

	function playAgain() {
		setNewGame((prevGame) => !prevGame);
		handleGame();
		startQuiz();
	}

	function countScore() {
		return quiz.filter((i) => i.userAnswer === i.correctAnswer).length;
	}

	function handleAnswerClick(event) {
		const { name, value, checked } = event.target;
		const newArray = [];

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
		<Quiz
			quiz={quiz}
			gameStatus={isGameFinished}
			handleAnswerClick={handleAnswerClick}
			handleGame={handleGame}
			score={score}
			playAgain={playAgain}
		/>
	);

	return <div>{renderQuiz}</div>;
}

export default App;
