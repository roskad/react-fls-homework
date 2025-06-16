import { useState } from "react";
import employeesList from "./employeesList.js";

function Task7() {
	const [generalList, setGeneralList] = useState(employeesList);
	const [searchQuery, setSearchQuery] = useState("");

	const filteredList = generalList.filter((e) => e.toLowerCase().includes(searchQuery.toLowerCase()));

	return (
		<div className="">
			<div className="">
				<h1>Задача 7. Динамічний пошук</h1>
				<p>
					<b>Завдання</b>: Є список працівників і поле пошуку. При введенні відображаються усі, які містять вказаний фрагмент
				</p>
			</div>
			<div className="p-5 rounded-lg output-bg">
				<div>
					<label>
						Працівник &nbsp;
						<input
							type="text"
							value={searchQuery}
							onChange={(e) => {
								setSearchQuery(e.target.value);
							}}
						/>
					</label>
					<ul className="max-w-xs p-4 list-none border border-solid border-gray-100">
						{filteredList.map((e, index) => (
							<li key={index} className="mb-2">
								{e}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Task7;
