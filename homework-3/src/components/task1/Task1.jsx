import { useState } from "react";

function Task1() {
	const [cmWidth, setCmWidth] = useState(0);

	const mWidth = cmWidth / 100;
	const kmWidth = mWidth / 1000;

	return (
		<div className="">
			<div className="">
				<h1>Задача 1. Конверт довжини</h1>
				<p>
					<b>Завдання</b>: З клавіатури вводиться довжина у сантиметрах. Виводити скільки це метрів, кілометрів.
				</p>
			</div>
			<div className="p-5 rounded-lg output-bg">
				<label>
					Довжина у см:&nbsp;
					<input
						type="number"
						value={cmWidth}
						onChange={(e) => {
							setCmWidth(e.target.value);
						}}
					/>
				</label>
				<div>
					<p>Метрів – {mWidth.toFixed(2)}</p>
					<p>Кілометрів – {kmWidth.toFixed(5)}</p>
				</div>
			</div>
		</div>
	);
}

export default Task1;
