import { memo, useMemo } from "react";

function GridRow({ list, sorting }) {
	const sortedData = useMemo(() => {
		let result = [...list];

		if (sorting) {
			result.sort((a, b) => {
				if (sorting === "asc") {
					return a.name.localeCompare(b.name);
				} else {
					return b.name.localeCompare(a.name);
				}
				// a.value - b.value; // для "asc"
				// b.value - a.value; // для "desc"
			});
		}

		return result;
	}, [list, sorting]);

	return (
		<div>
			{sortedData.map((el) => (
				<div key={el.id}>
					<span>{el.name}</span>
					<span>{el.value}</span>
				</div>
			))}
		</div>
	);
}

export default memo(GridRow);
