import React from "react";

export default function IntroPage(props) {
	return (
		<div className="bg-indigo-200 h-screen flex flex-col items-center justify-center text-center">
			<h1 className="text-5xl font-bold">Quiz</h1>
			<h3 className="py-8 text-2xl">Click on button below and try yourself in some questions</h3>
			<div>
				<button
					onClick={props.start}
					className="bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-800 px-12 py-6 rounded-xl text-white text-2xl  "
				>
					Start quiz
				</button>
			</div>
		</div>
	);
}
