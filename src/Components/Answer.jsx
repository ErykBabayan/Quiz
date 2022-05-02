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
			// set green color for all correct answers
			background: props.answer === props.correctAnswer ? "#84B082" : "#EEF2FF",
		};
		// set green color if userAnswer is correct
		if (props.answer === props.userAnswer && props.answer === props.correctAnswer) {
			styles = {
				background: "#84B082",
			};
		} else if (props.answer === props.userAnswer && props.answer !== props.correctAnswer) {
			styles = {
				background: "#D36060",
			};
		}
	}
	return (
		<label
			className="flex items-center mr-2 md:mr-4 lg:mr-6 text-xs sm:text-sm lg:text-lg xl:text-xl border-indigo-400 rounded-3xl border md:border-2 px-2 md:px-4 xl:px-6 py-1 md:py-2 cursor-pointer hover:bg-indigo-100 "
			style={styles}
		>
			<input className="hidden" onChange={props.answerClick} type="radio" name={props.name} id={props.id} value={props.answer} />
			{he.decode(props.answer)}
		</label>
	);
}
