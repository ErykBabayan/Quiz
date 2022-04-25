import React from "react";

export default function Answer(props) {
	//console.log(props);
	return (
		<label className=" mx-4">
			<input onChange={props.answerClick} type="radio" name={props.name} id={props.id} value={props.answer} />
			{props.answer}
		</label>
	);
}
