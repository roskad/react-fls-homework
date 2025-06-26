import Calc from "./Calc";
import ResultDisplay from "./ResultDisplay";

function Task1() {
	return (
		<div className="">
			<div className="">
				<h1 className="my-5 text-3xl font-bold">Задача 1. Оптимізація вибіркового рендеру з useMemo та React.memo</h1>
				<p>
					<b>Завдання</b>: Створіть компонент-калькулятор, який має два незалежні поля вводу: одне для числа A і одне для числа B. Також є окремий компонент ResultDisplay, який відображає A + B. Обгорніть ResultDisplay у React.memo(). Використайте useMemo в батьківському компоненті, щоб обчислити A + B і передати цей результат до ResultDisplay. Переконайтеся, що ResultDisplay ререндериться лише тоді, коли змінюються A або B, а не коли змінюється інший незалежний стан у батьківському компоненті (наприклад, лічильник, що не впливає на A чи B).
				</p>
			</div>
			<div className="flex justify-center mt-5 p-5 rounded-lg bg-[var(--bg-dark)]">
				<Calc />
			</div>
		</div>
	);
}

export default Task1;
