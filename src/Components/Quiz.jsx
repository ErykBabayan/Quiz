import React from "react";
import Answer from "./Answer";
import he from "he";

export default function Quiz(props) {
	const quizElement = props.quiz.map((item) => {
		return (
			<form key={item.id}>
				<legend className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl py-4 xl:py-6">{he.decode(item.question)}</legend>
				<fieldset className="flex">
					{item.allAnswers.map((answers, index) => {
						return (
							<Answer
								key={index}
								id={answers}
								correctAnswer={item.correctAnswer}
								answer={answers}
								isChecked={item.isChecked}
								userAnswer={item.userAnswer}
								name={item.id}
								answerClick={props.handleAnswerClick}
								gameStatus={props.gameStatus}
							/>
						);
					})}
				</fieldset>
			</form>
		);
	});

	const quizButton = props.gameStatus ? (
		<div className="flex flex-wrap justify-center max-w-xs">
			<p className="md:mt-12 mb-4 md:mb-8 text-center text-2xl lg:text-3xl font-bold">You scored : {props.score} / 5 </p>
			<button
				onClick={props.playAgain}
				className="mb-2 md:mb-10 px-6 md:px-12 py-4 md:py-6 border-2 bg-indigo-600 border-none text-white text-xl rounded-2xl shadow-xl"
			>
				Play Again !
			</button>
		</div>
	) : (
		<button
			onClick={props.handleGame}
			className="mt-2 mb-2 md:mb-10 px-6 md:px-12 py-4 md:py-6 border-2 bg-indigo-600 border-none text-white text-xl rounded-2xl shadow-xl"
		>
			Check Answers
		</button>
	);

	return (
		<div className=" flex justify-center  bg-indigo-50 px-2 lg:p-12">
			<div className="flex flex-wrap items-center justify-center lg: max-w-4xl xl:max-w-6xl h-screen text-blue-900 bg-indigo-50 sm:px-6 lg:px-18 xl:px-24 ">
				<div>{quizElement}</div>
				{quizButton}
			</div>
		</div>
	);
}
