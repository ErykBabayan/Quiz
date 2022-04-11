import { render } from "@testing-library/react";
import React from "react";
import IntroPage from "./Components/IntroPage";
import Quiz from "./Components/Quiz";

function App() {
	const [isStarted, setIsStarted] = React.useState(false);

	function startQuiz() {
		console.log("start");
		setIsStarted((prevIsStarted) => !prevIsStarted);
	}

	const renderQuiz = !isStarted ? <IntroPage start={() => startQuiz()} /> : <Quiz />;

	return <div>{renderQuiz}</div>;
}

export default App;
