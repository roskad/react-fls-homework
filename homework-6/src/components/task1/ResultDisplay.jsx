import { memo } from "react";

function ResultDisplay({ sum }) {
	console.log("-----ResultDisplay rendered------");

	return (
		<>
			<div className="flex gap-2">
				<span>=</span>
				<span>{sum}</span>
			</div>
		</>
	);
}

export default memo(ResultDisplay);
