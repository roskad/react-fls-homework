import { TravelContext } from "@/contexts/TravelContext";
import { hotels } from "@/data/hotels";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useContext } from "react";

export default function HotelesPage() {
	const { state, dispatch } = useContext(TravelContext);
	const { isDark, setIsDark } = useDarkMode();

	let itemStyles;

	return (
		<div className="p-4">
			<h2 className="text-2xl font-bold mb-4">Готелі</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{hotels.map((hotel) => {
					const isSelected = state.hotels.some((h) => h.id === hotel.id);
					if (isDark) {
						itemStyles = `${isSelected ? "border-[var(--hover)] bg-[var(--bg-dark)]" : "border-gray-500"}`;
					} else {
						itemStyles = `${isSelected ? "border-[var(--accent)] bg-[var(--accent-bright)]" : "border-gray-300"}`;
					}
					return (
						<div key={hotel.id} className={`p-4 rounded-lg border transition ${itemStyles}`}>
							<p className="font-semibold">
								{hotel.name} — {hotel.city}
							</p>
							<p>Рейтинг: {hotel.rating} ⭐</p>
							<p>Ціна: {hotel.price} грн</p>
							<button onClick={() => dispatch({ type: "TOGGLE_HOTEL", payload: hotel })} className={`mt-2 px-4 py-1 rounded bg-[var(--accent)] text-[var(--text-over-accent)]`}>
								{isSelected ? "Обрано" : "Додати"}
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
