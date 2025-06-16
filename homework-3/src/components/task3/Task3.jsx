import { useEffect, useState } from "react";

function Task3() {
	const [maxSpeed, setMaxSpeed] = useState("");
	const [currentSpeed, setCurrentSpeed] = useState("");
	const [isVisible, setIsVisible] = useState(false);

	let style = null;

	if (!isNaN(parseFloat(maxSpeed))) {
		if (currentSpeed < maxSpeed * 0.5) {
			style = { backgroundColor: "orange" };
		} else if (currentSpeed >= maxSpeed * 0.5 && currentSpeed <= maxSpeed) {
			style = { backgroundColor: "green" };
		} else {
			style = { backgroundColor: "red" };
		}
	}

	useEffect(() => {
		let intervalId = null;
		if (maxSpeed && currentSpeed > maxSpeed * 0.9) {
			intervalId = setInterval(() => {
				setIsVisible((v) => !v);
			}, 500);
		} else {
			setIsVisible(false);
		}
		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	}, [currentSpeed, maxSpeed]);

	return (
		<div className="">
			<div className="">
				<h1>Задача 3. Швидкість авто</h1>
				<p>
					<b>Завдання</b>: Вводиться дозволена швидкість і поточна швидкість авто.
				</p>
				<ul>
					<li>Якщо не введено дозволену швидкість, то елемент введення поточної швидкості заблокований.</li>
					<li>Якщо швидкість менше 50% дозволеної, то колір input – оранжевий</li>
					<li>якщо від 50% до 100% - зелений</li>
					<li>вище 100% - червоний</li>
					<li>Якщо значення вище 90% починає блимати повідомлення «Увага!»</li>
				</ul>
			</div>
			<div className="p-5 rounded-lg output-bg">
				<div>
					<label>
						Дозволена швидкість авто:&nbsp;
						<input type="number" value={maxSpeed} min="5" max="140" onChange={(e) => setMaxSpeed((prevMaxSpeed) => e.target.value)} />
					</label>
				</div>
				<div>
					<label>
						Поточна швидкість авто:&nbsp;
						<input disabled={!maxSpeed} style={style} type="number" min="0" value={currentSpeed} onChange={(e) => setCurrentSpeed((prevMaxSpeed) => Number(e.target.value))} />
					</label>
					<span style={{ display: isVisible ? "inline" : "none", color: "var(--hover)" }}>
						<b>Увага!</b>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Task3;
