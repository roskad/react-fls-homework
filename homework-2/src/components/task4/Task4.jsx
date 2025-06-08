import styles from "./assets/style/task4.module.scss";

function Task4() {
	const workersList2 = [
		{
			id: "1",
			name: "Іванов",
			salary: 10000,
		},
		{
			id: "2",
			name: "Петров",
			salary: 20000,
		},
		{
			id: "3",
			name: "Сидоров",
			salary: 50000,
		},
	];

	return (
		<div className={`task ${styles.task}`}>
			<div className="task__text">
				<h1>Задача 4. Список</h1>
				<p>Вивести список як маркований список з елементами у форматі (name: salary)</p>
				<p>
					<code>{JSON.stringify({ workersList2 }, null, 2)}</code>
				</p>
			</div>
			<div className="task__container">
				<ul className={styles.output}>
					{workersList2.map((worker) => (
						<li key={worker.id}>{`${worker.name}: ${worker.salary}`}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Task4;
