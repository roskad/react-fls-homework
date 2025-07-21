import PostsList from "./redux/posts/PostsList";

function Task2() {
	return (
		<>
			<h1 className="my-5 text-3xl font-bold">Задача 2. Список постів з API (createAsyncThunk)</h1>
			<p>
				<b>Завдання</b>: Завантажити список постів з публічного API <code className="text-[var(--text-accent)]">(https://jsonplaceholder.typicode.com/posts)</code> та відобразити їхні заголовки. Додати індикатор завантаження та повідомлення про помилку.Використати createAsyncThunk для отримання масиву даних
			</p>
			<div className="flex justify-center mt-5 p-5 rounded-lg bg-[var(--bg-dark)]">
				<PostsList />
			</div>
		</>
	);
}

export default Task2;
