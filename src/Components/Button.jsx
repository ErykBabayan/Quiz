import React from "react";

export default function Button(props) {
	const quizButton = props.gameStatus ? (
		<div className="flex flex-wrap justify-center max-w-xs">
			<p className=" mt-0 text-center text-2xl lg:text-2xl font-bold">You scored : {props.score} / 5 </p>
			<button onClick={props.playAgain} className="mt-2 px-12 py-4 border-2 bg-indigo-600 border-none text-white text-xl rounded-2xl shadow-xl">
				Play Again !
			</button>
		</div>
	) : (
		<button
			onClick={props.handleGame}
			className=" md:mt-10 lg:mt-2 xl:mt-0 px-8 py-4 border-2 bg-indigo-600 border-none text-white text-xl rounded-2xl shadow-xl"
		>
			Check Answers
		</button>
	);

	return quizButton;
}
