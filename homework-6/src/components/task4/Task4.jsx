import Search from "./Search";

function Task4() {
	return (
		<div className="">
			<div className="">
				<h1 className="my-5 text-3xl font-bold">Задача 4. useDebounce – відкладений виклик функції</h1>
				<p>
					<b>Завдання</b>: Створіть кастомний хук useDebounce, який приймає значення та затримку в мілісекундах. Він повинен повертати "відкладене" значення, яке оновлюється лише після того, як минув заданий час без змін. Створіть поле пошуку, де результати пошуку оновлюються не відразу після кожного символу, а з невеликою затримкою (наприклад, 500мс) після зупинки введення, використовуючи useDebounce.
				</p>
			</div>
			<div className="mt-5 p-5 rounded-lg bg-[var(--bg-dark)]">
				<Search />
			</div>
		</div>
	);
}

export default Task4;
