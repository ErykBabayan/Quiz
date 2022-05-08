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
			className="mr-6 mb-4 px-2 lg:px-4 py-2 text-base lg:text-xl  w-full sm:w-3/6 md:w-auto hover:bg-indigo-100 border-indigo-400 rounded-3xl border-2 cursor-pointer  "
			style={styles}
		>
			<input className="hidden" onChange={props.answerClick} type="radio" name={props.name} id={props.id} value={props.answer} />
			{he.decode(props.answer)}
		</label>
	);
}
