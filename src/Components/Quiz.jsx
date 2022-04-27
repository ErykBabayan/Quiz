import React from "react";
import Answer from "./Answer";

export default function Quiz(props) {
	console.log(props.quiz);
	const quizElement = props.quiz.map((item) => {
		return (
			<form key={item.id}>
				<legend className="text-3xl py-8">{item.question}</legend>
				<fieldset className="flex">
					{item.allAnswers.map((answers, index) => {
						return (
							<Answer
								key={index}
								id={answers}
								name={item.id}
								answer={answers}
								isChecked={item.isChecked}
								userAnswer={item.userAnswer}
								answerClick={props.handleAnswerClick}
							/>
						);
					})}
				</fieldset>
			</form>
		);
	});

	return (
		<div className=" flex justify-center text-blue-900 bg-indigo-50 h-full">
			<div className="flex flex-wrap justify-center max-w-5xl bg-indigo-50 py-12 px-12">
				<div>{quizElement}</div>
			</div>
		</div>
	);
}
