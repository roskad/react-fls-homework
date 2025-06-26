import { useMemo, useState } from "react";
import Input from "./Input";
import ResultDisplay from "./ResultDisplay";

function Calc() {
	const [firstNumber, setFirstNumber] = useState("");
	const [secondNumber, setSecondNumber] = useState("");
	const [counter, setCounter] = useState(0);

	const sum = useMemo(() => {
		return +firstNumber + +secondNumber;
	}, [firstNumber, secondNumber]);

	function handleClick() {
		setCounter((prev) => prev + 1);
	}

	return (
		<div className="flex flex-col gap-10">
			<div className="flex gap-2">
				<div className="flex gap-2">
					<Input number="A" value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} />
					<span>+</span>
					<Input number="B" value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)} />
				</div>
				<ResultDisplay sum={sum} a={firstNumber} b={secondNumber} />
			</div>
			<div className="flex flex-col gap-4 justify-center">
				<p>Лічильник: {counter}</p>
				<button className="" onClick={handleClick}>
					Клікни
				</button>
			</div>
		</div>
	);
}

export default Calc;
