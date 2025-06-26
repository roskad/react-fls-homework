import { GoSortAsc, GoSortDesc } from "react-icons/go";
import { useCallback, useDeferredValue, useMemo, useState } from "react";
import GridRow from "./GridRow";

function DataGrid({ data }) {
	const [query, setQuery] = useState("");
	const [sorting, setSorting] = useState("");

	const deferredQuery = useDeferredValue(query);
	const deferredSorting = useDeferredValue(sorting);

	const filteredItems = data.filter((item) => item.name.toLocaleLowerCase().includes(deferredQuery.toLocaleLowerCase()));

	const handleSort = useCallback((order) => {
		setSorting((prev) => order);
	}, []);

	return (
		<>
			<div className="flex gap-2.5 justify-between">
				<input
					type="text"
					placeholder="Пошук..."
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
					}}
					className="border-b border-solid border-gray-400 focus:outline-none focus:border-[var(--accent)]"
				/>
				<div className="flex gap-2">
					<button title="Sort Descending" onClick={() => handleSort("desc")} className="py-1 px-1 text-2xl">
						<GoSortDesc />
					</button>
					<button title="Sort Ascending" onClick={() => handleSort("asc")} className="py-1 px-1 text-2xl">
						<GoSortAsc />
					</button>
				</div>
			</div>
			<div className="mt-8">
				<GridRow list={filteredItems} sorting={deferredSorting} />
			</div>
		</>
	);
}

export default DataGrid;
