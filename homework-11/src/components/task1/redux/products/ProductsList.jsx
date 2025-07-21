import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct, setFilter } from "./productsSlice";
import { useState } from "react";

export default function ProductsList() {
	const dispatch = useDispatch();
	const { items, filter } = useSelector((state) => state.products);
	const [inputValue, setInputValue] = useState("");
	const [filterValue, setFilterValue] = useState("");

	const handleAdd = () => {
		if (inputValue.trim() !== "") {
			dispatch(addProduct(inputValue.trim()));
			setInputValue("");
		}
	};

	const handleFilter = (e) => {
		setFilterValue(e.target.value);
		dispatch(setFilter(e.target.value));
	};

	const handleRemove = (item) => {
		dispatch(removeProduct(item));
	};

	const filteredItems = items.filter((item) => item.toLowerCase().includes(filter.toLowerCase()));

	return (
		<div className="max-w-xl mx-auto p-6">
			<h2 className="text-2xl font-bold mb-4 text-center">Список товарів</h2>

			<div className="flex gap-2 mb-6">
				<input type="text" placeholder="Назва нового товару..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="border rounded px-4 py-2 w-full" />
				<button onClick={handleAdd}>Додати</button>
			</div>

			<div className="mb-4">
				<input type="text" placeholder="Пошук за назвою..." value={filterValue} onChange={handleFilter} className="border rounded px-4 py-2 w-full" />
			</div>

			<p className="mb-2 text-gray-300">
				Знайдено товарів: <span className="font-bold">{filteredItems.length}</span>
			</p>

			<ul className="divide-y border rounded">
				{filteredItems.map((item, index) => (
					<li key={index} className="px-4 py-2 flex justify-between items-center hover:bg-gray-700 transition-colors">
						<span>{item}</span>
						<button onClick={() => handleRemove(item)}>✖</button>
					</li>
				))}
			</ul>
		</div>
	);
}
