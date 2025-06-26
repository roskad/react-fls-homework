import WindowSize from "./WindowSize";

function Task3() {
	return (
		<div className="">
			<div className="">
				<h1 className="my-5 text-3xl font-bold">Задача 3. useWindowSize – розмір вікна браузера</h1>
				<p>
					<b>Завдання</b>: Створіть кастомний хук useWindowSize, який повертає поточну ширину та висоту вікна браузера. Він повинен оновлюватися при зміні розміру вікна. Створіть компонент, який відображає поточні розміри вікна браузера (ширина x висота), використовуючи useWindowSize. На основі розмірів відображати іконки монітора, планшета або телефона.
				</p>
			</div>
			<div className="mt-5 p-5 rounded-lg bg-[var(--bg-dark)]">
				<WindowSize />
			</div>
		</div>
	);
}

export default Task3;
