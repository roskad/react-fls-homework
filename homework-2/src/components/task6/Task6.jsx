import { useState } from "react";
import styles from "./assets/style/task6.module.scss";

function Task6() {
	// waitingList, processingList, completedList
	const [newDish, setNewDish] = useState("");
	const [waitingList, setWaitingList] = useState(() => []);
	const [processingList, setProcessingList] = useState(() => []);
	const [completedList, setCompletedList] = useState(() => []);

	function handleOrder(e) {
		e.preventDefault();

		const trimmed = newDish.trim();
		if (!trimmed) return;

		setWaitingList((prev) => [...prev, trimmed]);
		setNewDish("");

		// const input = document.querySelector("input");
		// setWaitingList((prevList) => [...prevList, input.value.trim()]);
		// console.log(waitingList);
	}

	const handleStartCooking = (index) => {
		const dish = waitingList[index];
		setWaitingList((prev) => prev.filter((j, i) => i !== index));
		setProcessingList((prev) => [...prev, dish]);
	};

	const handleFinishCooking = (index) => {
		const dish = processingList[index];
		setProcessingList((prev) => prev.filter((j, i) => i !== index));
		setCompletedList((prev) => [...prev, dish]);
	};

	const handleServe = (index) => {
		setCompletedList((prev) => prev.filter((j, i) => i !== index));
	};

	return (
		<div className="task">
			<div className="task__text">
				<h1>Задача 6. Замовлення</h1>
				<p>На кухню поступають замовлення. Спочатку ми додаємо їх у список “Очікують на виконання”</p>
				<ol>
					<li>якщо повар береться робити – замовлення переходить у список “Виконуються”</li>
					<li>якщо замовлення виконано – переходить у список “Готові до виносу”</li>
					<li>якщо натиснути на “Подано” – страва зникає з таблиці</li>
				</ol>
			</div>
			<div className={`task__container ${styles.task__container}`}>
				<div>
					<form onSubmit={handleOrder}>
						<label>
							Нова замовлена страва
							<input type="text" value={newDish} onChange={(e) => setNewDish(e.target.value)} />
							<button type="submit">Додати</button>
						</label>
					</form>
				</div>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Очікують</th>
							<th>Виконуються</th>
							<th>Готові</th>
						</tr>
					</thead>
					<tbody>
						{[...Array(Math.max(waitingList.length, processingList.length, completedList.length)).keys()].map((i) => (
							<tr key={i}>
								<td>
									{waitingList[i] && (
										<>
											{waitingList[i]} <button onClick={() => handleStartCooking(i)}>Готувати</button>
										</>
									)}
								</td>
								<td>
									{processingList[i] && (
										<>
											{processingList[i]} <button onClick={() => handleFinishCooking(i)}>До видачі</button>
										</>
									)}
								</td>
								<td>
									{completedList[i] && (
										<>
											{completedList[i]} <button onClick={() => handleServe(i)}>Подано</button>
										</>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Task6;
