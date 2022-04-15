import React from "react";
import Answer from "./Answer";

export default function Quiz(props) {
	//console.log(props);

	const quizElement = props.quiz.map((item, index) => {
		console.log(item);

		return (
			<form key={index}>
				<legend>{item.question}</legend>
				<fieldset>
					{item.allAnswers.map((answers, index) => {
						return <Answer />;
					})}
				</fieldset>
			</form>
		);
	});

	return (
		<div className=" flex justify-center text-blue-900 bg-blue-900 h-screen">
			<div className="flex flex-wrap justify-center max-w-4xl border border-red-600 border-solid bg-yellow-50 py-12 px-12">
				<div>{quizElement}</div>
			</div>
		</div>
	);
}
