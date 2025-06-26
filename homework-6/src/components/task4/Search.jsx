import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

const data = ["Алчевськ", "Балаклія", "Бар", "Батурин", "Бахмач", "Бахмут", "Бердичів", "Бердянськ", "Берегове", "Біла Церква", "Білгород-Дністровський", "Бориспіль", "Борислав", "Боярка", "Бровари", "Буча", "Вараш", "Васильків", "Вінниця", "Вишгород", "Вишневе", "Вознесенськ", "Волноваха", "Володимир", "Гадяч", "Генічеськ", "Глухів", "Гнівань", "Горішні Плавні", "Горлівка", "Городище", "Гостомель", "Дніпро", "Добропілля", "Дрогобич", "Дубно", "Дунаївці", "Енергодар", "Жашків", "Житомир", "Жмеринка", "Заліщики", "Запоріжжя", "Заставна", "Звенигородка", "Здолбунів", "Зеленодольськ", "Зміїв", "Золотоноша", "Золочів", "Івано-Франківськ", "Ізмаїл", "Ізюм", "Іллінці", "Ірпінь", "Ічня", "Кам’янець-Подільський", "Канів", "Карлівка", "Каховка", "Київ", "Ковель", "Кодима", "Козятин", "Коломия", "Конотоп", "Корець", "Коростень", "Корсунь-Шевченківський", "Краматорськ", "Красилів", "Кременчук", "Кривий Ріг", "Кропивницький", "Кузнецовськ", "Ладижин", "Ланівці", "Лебедин", "Лисичанськ", "Лозова", "Лубни", "Луганськ", "Луцьк", "Львів", "Миргород", "Могилів-Подільський", "Миколаїв", "Мукачево", "Ніжин", "Нікополь", "Нововолинськ", "Новомиргород", "Новомосковськ", "Новоукраїнка", "Овруч", "Одеса", "Олександрія", "Охтирка", "Первомайськ", "Переяслав"];

function Search() {
	const [searchTerm, setSearchTerm] = useState("");
	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	const [results, setResults] = useState([]);

	let searchResult;

	useEffect(() => {
		if (debouncedSearchTerm) {
			setResults(search(debouncedSearchTerm));
		} else {
			setResults([]);
		}
	}, [debouncedSearchTerm]);

	const search = (query) => {
		return data.filter((item) => item.toLowerCase().startsWith(query.toLowerCase()));
	};

	if (results.length === 0 && debouncedSearchTerm) {
		searchResult = <p>Нічого не знайдено 🙁</p>;
	} else {
		searchResult = (
			<ul className="pl-6 list-disc">
				{results.map((item, i) => (
					<li key={i} className="not-last:mb-2">
						{item}
					</li>
				))}
			</ul>
		);

		// ?? Не розумію чому ця функція виконується тричі після завантаження сторінки ↓. Це ж означає що компонент тричі рендериться?
		// console.log(search(debouncedSearchTerm));

		return (
			<>
				<h2 className="mb-4 text-2xl font-bold">Пошук по містах України:</h2>
				<input type="text" placeholder="Пошук..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border-b border-solid border-gray-400 focus:outline-none focus:border-[var(--accent)]" />
				<div className="h-96 mt-3 overflow-auto">{searchResult}</div>
			</>
		);
	}
}

export default Search;
