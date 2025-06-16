import GameField from "./GameField";

function Task4() {
	const gameField = [
		{ id: 1, hasMine: true, isOpen: false },
		{ id: 2, hasMine: false, isOpen: false },
		{ id: 3, hasMine: false, isOpen: false },
		{ id: 4, hasMine: true, isOpen: false },
		{ id: 5, hasMine: true, isOpen: false },
		{ id: 6, hasMine: false, isOpen: false },
		{ id: 7, hasMine: false, isOpen: false },
	];
	return (
		<div className="">
			<div className="">
				<h1>Задача 4. Однорядковий сапер</h1>
				<p>
					<b>Завдання</b>: Однорядкова таблиця, до клітинок якої додано інформацію про наявність міни (використати атрибути).
				</p>
				<ul>
					<li>Спочатку клітинки сірі.</li>
					<li>При натисненні на клітинку аналізується чи є там міна і тоді колір стає червоним, якщо немає – зеленим.</li>
					<li>Додати можливість відкриття усіх сусідніх незамінованих клітинок при відкритті незамінованої клітинки.</li>
				</ul>
			</div>
			<div className="p-5 rounded-lg output-bg">
				<GameField gameField={gameField} />
			</div>
		</div>
	);
}

export default Task4;
