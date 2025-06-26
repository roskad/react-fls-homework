import React, { useState, useMemo, useDeferredValue, useCallback } from "react";

// GridRow (дочірній компонент)
const GridRow = React.memo(({ item, onClick }) => {
	// console.log("Rendering row:", item.id);
	return (
		<tr onClick={() => onClick(item)}>
			<td>{item.id}</td>
			<td>{item.name}</td>
			<td>{item.age}</td>
		</tr>
	);
});

// DataGrid (батьківський компонент)
const DataGrid = ({ data }) => {
	const [query, setQuery] = useState("");
	const [sortField, setSortField] = useState(null);
	const [sortOrder, setSortOrder] = useState("asc");

	const deferredQuery = useDeferredValue(query);
	const deferredSortField = useDeferredValue(sortField);
	const deferredSortOrder = useDeferredValue(sortOrder);

	const handleRowClick = useCallback((item) => {
		alert(`Clicked on ${item.name}`);
	}, []);

	const handleSort = useCallback((field) => {
		setSortField(field);
		setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
	}, []);

	const filteredAndSortedData = useMemo(() => {
		let result = [...data];

		if (deferredQuery) {
			result = result.filter((item) => item.name.toLowerCase().includes(deferredQuery.toLowerCase()));
		}

		if (deferredSortField) {
			result.sort((a, b) => {
				const valA = a[deferredSortField];
				const valB = b[deferredSortField];
				if (valA < valB) return deferredSortOrder === "asc" ? -1 : 1;
				if (valA > valB) return deferredSortOrder === "asc" ? 1 : -1;
				return 0;
			});
		}

		return result;
	}, [data, deferredQuery, deferredSortField, deferredSortOrder]);

	return (
		<div>
			<input type="text" placeholder="Search by name" value={query} onChange={(e) => setQuery(e.target.value)} />
			<button onClick={() => handleSort("name")}>Sort by Name</button>
			<button onClick={() => handleSort("age")}>Sort by Age</button>

			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					{filteredAndSortedData.map((item) => (
						<GridRow key={item.id} item={item} onClick={handleRowClick} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DataGrid;
