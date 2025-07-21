import ProductsList from "@/components/task1/redux/products/ProductsList";

function Task1() {
	return (
		<>
			<h1 className="my-5 text-3xl font-bold">Задача 1. Список з фільтрацією</h1>
			<p>
				<b>Завдання</b>: Створити список товарів. Має бути можливість додавання нового товару та фільтрації товарів за назвою (може бути одна сторінка, а можна додавання товарів зробити на окремій сторінці).
			</p>
			<div className="flex justify-center mt-5 p-5 rounded-lg bg-[var(--bg-dark)]">
				<ProductsList />
			</div>
		</>
	);
}

export default Task1;
