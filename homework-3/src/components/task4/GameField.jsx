import { useState } from "react";

function GameField({ gameField }) {
	const [field, setField] = useState(gameField);

	function cellClick(cellId) {
		setField((prev) => prev.map((cell) => (cell.id === cellId ? { ...cell, isOpen: true } : cell)));
	}

	function getStyle(cell) {
		let style;
		if (cell.isOpen) {
			if (cell.hasMine) {
				style = { backgroundColor: "red" };
			} else {
				style = { backgroundColor: "green" };
			}
		} else {
			style = { backgroundColor: "lightgray" };
		}
		return style;
	}

	return (
		<div>
			<div className="flex gap-4">
				{field.map((el) => (
					<div
						key={el.id}
						onClick={() => {
							cellClick(el.id);
						}}
						className="w-15 h-15 bg-gray-400 cursor-pointer"
						style={getStyle(el)}></div>
				))}
			</div>
		</div>
	);
}

export default GameField;
