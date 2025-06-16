import { useState } from "react";
import athletesList from "./athletesList.js";

function Task5() {
	const [generalList, setGeneralList] = useState(athletesList);
	const [contestList, setContestList] = useState([]);

	function addToContestList(name) {
		setGeneralList((prev) => prev.filter((e) => e !== name));
		setContestList((prev) => [...prev, name]);
	}

	function addToGeneralList(name) {
		setContestList((prev) => prev.filter((e) => e !== name));
		setGeneralList((prev) => [...prev, name]);
	}

	return (
		<div className="">
			<div className="">
				<h1>Задача 5. Список спортсменів</h1>
				<p>
					<b>Завдання</b>: Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний.
				</p>
				<ul>
					<li>При натисканні на зелену стрілку спортсмен переміщається у список для змагань.</li>
					<li>При натисканні на червону стрілку спортсмен переміщається у загальний список.</li>
				</ul>
			</div>
			<div className="flex gap-6 p-5 rounded-lg output-bg">
				<div className="flex-grow-1 max-w-xs border border-solid border-gray-100 text-center">
					<h2>Загальний список</h2>
					<ul className="px-4 list-none">
						{generalList.map((e, index) => (
							<li key={index} className="flex justify-between">
								{e}
								<span className="cursor-pointer color-green" onClick={() => addToContestList(e)}>
									→
								</span>
							</li>
						))}
					</ul>
				</div>
				<div className="flex-grow-1 max-w-xs border border-solid border-gray-100 text-center">
					<h2>Для змагань</h2>
					<ul className="px-4 list-none">
						{contestList.map((e, index) => (
							<li key={index} className="flex justify-between">
								{e}
								<span className="cursor-pointer color-red" onClick={() => addToGeneralList(e)}>
									←
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Task5;
