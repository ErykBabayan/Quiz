import React from "react";
import he from "he";

export default function Answer(props) {
	let styles;

	if (props.userAnswer === props.answer) {
		styles = {
			background: "#B5B3E2",
		};
	}

	if (props.gameStatus) {
		styles = {
			background: props.answer === props.correctAnswer ? "#84B082" : "#D36060",
			color: "white",
			borderColor: "#EEF2FF",
		};
		if (props.answer === props.userAnswer && props.answer === props.correctAnswer) {
			styles = {
				background: "#84B082",
				color: "white",
			};
		} else if (props.answer === props.userAnswer && props.answer !== props.correctAnswer) {
			styles = {
				background: "#B5B3E2",
				color: "white",
			};
		}
	}
	return (
		<label className="mr-6 text-xl border-indigo-400 rounded-3xl border-2 px-6 py-2 cursor-pointer hover:bg-indigo-100 " style={styles}>
			<input className="hidden" onChange={props.answerClick} type="radio" name={props.name} id={props.id} value={props.answer} />
			{he.decode(props.answer)}
		</label>
	);
}
