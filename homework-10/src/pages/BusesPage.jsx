import { TravelContext } from "@/contexts/TravelContext";
import { buses } from "@/data/buses";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useContext } from "react";

export default function BusesPage() {
	const { state, dispatch } = useContext(TravelContext);
	const { isDark, setIsDark } = useDarkMode();

	let itemStyles;

	return (
		<div className="p-4">
			<h2 className="text-2xl font-bold mb-4">Автобуси</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{buses.map((bus) => {
					const isSelected = state.buses.some((b) => b.id === bus.id);
					if (isDark) {
						itemStyles = `${isSelected ? "border-[var(--hover)] bg-[var(--bg-dark)]" : "border-gray-500"}`;
					} else {
						itemStyles = `${isSelected ? "border-[var(--accent)] bg-[var(--accent-bright)]" : "border-gray-300"}`;
					}
					return (
						<div key={bus.id} className={`p-4 rounded-lg border transition ${itemStyles}`}>
							<p className="font-semibold">
								{bus.name} — {bus.route}
							</p>
							<p>Ціна: {bus.price} грн</p>
							<p>{`Час: ${bus.time}`}</p>
							<button onClick={() => dispatch({ type: "TOGGLE_BUS", payload: bus })} className="mt-2 px-4 py-1 rounded bg-[var(--accent)] text-[var(--text-over-accent)]">
								{isSelected ? "Обрано" : "Додати"}
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
