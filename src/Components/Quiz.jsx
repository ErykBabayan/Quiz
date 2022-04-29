import React from "react";
import Answer from "./Answer";

export default function Quiz(props) {
	const quizElement = props.quiz.map((item) => {
		return (
			<form key={item.id}>
				<legend className="text-3xl py-6">{item.question}</legend>
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

	return (
		<div className=" flex justify-center text-blue-900 bg-indigo-50 h-full">
			<div className="flex flex-wrap justify-center max-w-5xl bg-indigo-50 p-12">
				<div>{quizElement}</div>
				<button onClick={props.handleGame} className="mt-24 mb-16 px-12 py-6 border-2 bg-indigo-600 text-white text-2xl rounded-2xl">
					Check Answers
				</button>
			</div>
		</div>
	);
}
