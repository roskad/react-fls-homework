import DataGrid from "./DataGrid";
import generateLargeDataset from "./generateLargeDataset";

const data = generateLargeDataset(1000);

function Task2() {
	return (
		<div className="">
			<div className="">
				<h1 className="my-5 text-3xl font-bold">Задача 2. Таблиця з фільтрацією та сортуванням, чутлива до UI</h1>
				<p>
					<b>Завдання</b>: Створіть компонент DataGrid (батьківський) та GridRow (дочірній). <strong>Мета</strong>: забезпечити швидкий відгук на введення та кліки, навіть якщо обробка даних займає час.
				</p>
				<ul className="pl-6 list-disc">
					<li>DataGrid отримує великий масив даних, має поле вводу для фільтрації, кнопки для сортування за різними колонками.</li>
					<li>
						GridRow (обгорнутий у <strong>React.memo</strong>) відображає один рядок даних.
					</li>
					<li>
						Використайте <strong>useDeferredValue</strong> для пошукового запиту та/або параметрів сортування.
					</li>
					<li>
						Використайте <strong>useMemo</strong> для обчислення відфільтрованих та відсортованих даних на основі відкладених значень.
					</li>
					<li>
						Використайте <strong>useCallback</strong> для функцій-обробників сортування та інших інтерактивних елементів, які передаються до дочірніх компонентів.
					</li>
				</ul>
			</div>
			<div className="mt-5 p-5 rounded-lg bg-[var(--bg-dark)]">
				<DataGrid data={data} />
			</div>
		</div>
	);
}

export default Task2;
