import React from "react";
import Answer from "./Answer";
import Button from "./Button";
import he from "he";

export default function Quiz(props) {
	const quizElement = props.quiz.map((item) => {
		return (
			<form key={item.id}>
				<legend className="text-xl lg:text-2xl xl:text-3xl pb-6 md:pb-2 xl:pb-4">{he.decode(item.question)}</legend>
				<fieldset className="flex flex-wrap lg:flex-nowrap w-full lg:w-full m">
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
				<hr className="border mt-5 mb-2" />
			</form>
		);
	});

	return (
		<div className=" flex justify-center h-full md:h-screen bg-indigo-50 ">
			<div className="flex flex-wrap items-center justify-center lg: max-w-4xl xl:max-w-6xl text-indigo-900 p-6 lg:pt-4   ">
				<div className="flex flex-wrap justify-center">
					<div>{quizElement}</div>
					<Button score={props.score} handleGame={props.handleGame} playAgain={props.playAgain} gameStatus={props.gameStatus} />
				</div>
			</div>
		</div>
	);
}
