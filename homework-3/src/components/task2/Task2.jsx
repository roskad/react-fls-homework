import { useState } from "react";

function Task2() {
	const [temp, setTemp] = useState("");

	let style = null;

	if (!isNaN(parseFloat(temp))) {
		if (temp < 0) {
			style = { backgroundColor: "white" };
		} else if (temp < 11) {
			style = { backgroundColor: "blue" };
		} else if (temp < 23) {
			style = { backgroundColor: "green" };
		} else {
			style = { backgroundColor: "red" };
		}
	}

	return (
		<div className="">
			<div className="">
				<h1>Задача 2. Детектор температури</h1>
				<p>
					<b>Завдання</b>: (Реалізувати з класами і стилями.) З клавіатури вводиться температура. Змінювати колір фону у залежності від значення:
				</p>
				<ul>
					<li>менше нуля – білий</li>
					<li>від 0 до 10 – синій</li>
					<li>від 11 до 22 – зелений</li>
					<li>вище 22 – червоний</li>
				</ul>
			</div>
			<div className="p-5 rounded-lg output-bg">
				<div style={style}>
					<label>
						Температура:&nbsp;
						<input type="number" value={temp} onChange={(e) => setTemp(e.target.value)} />
					</label>
				</div>
			</div>
		</div>
	);
}

export default Task2;
