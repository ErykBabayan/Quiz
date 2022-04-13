import React from "react";

export default function Quiz(props) {
	//console.log(props);

	const quizElement = props.quiz.map((item, index) => {
		console.log(item);

		return (
			<form key={index}>
				<legend>{item.question}</legend>
				{item.allAnswers.map((answers, index) => {
					<input type="radio" />;
				})}
			</form>
		);
	});

	return (
		<div className=" flex justify-center text-blue-900">
			<div className="flex flex-wrap justify-center max-w-4xl border border-red-600 border-solid">
				<div>{quizElement}</div>
			</div>
		</div>
	);
}
