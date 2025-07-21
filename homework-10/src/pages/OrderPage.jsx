import { TravelContext } from "@/contexts/TravelContext";
import { useContext } from "react";

export default function OrdersPage() {
	const { state, dispatch } = useContext(TravelContext);
	const isDisabled = state.buses.length === 0 && state.hotels.length === 0;

	return (
		<div className="p-4">
			<h2 className="text-2xl font-bold mb-4">Ваше замовлення</h2>

			<div className="mb-4">
				<h3 className="text-xl font-semibold mb-2">Автобуси</h3>
				{state.buses.length > 0 ? (
					state.buses.map((bus) => (
						<div key={bus.id} className="flex justify-between items-center border-b py-2">
							<span>
								{bus.name} — {bus.route}
							</span>
							<button onClick={() => dispatch({ type: "TOGGLE_BUS", payload: bus })} className="hover:underline">
								Видалити
							</button>
						</div>
					))
				) : (
					<p className="text-gray-400">Немає обраних автобусів</p>
				)}
			</div>

			<div className="mb-4">
				<h3 className="text-xl font-semibold mb-2">Готелі</h3>
				{state.hotels.length > 0 ? (
					state.hotels.map((hotel) => (
						<div key={hotel.id} className="flex justify-between items-center border-b py-2">
							<span>
								{hotel.name} — {hotel.city}
							</span>
							<button onClick={() => dispatch({ type: "TOGGLE_HOTEL", payload: hotel })} className="hover:underline">
								Видалити
							</button>
						</div>
					))
				) : (
					<p className="text-gray-400">Немає обраних готелів</p>
				)}
			</div>

			<button disabled={isDisabled} onClick={() => dispatch({ type: "CLEAR_ALL" })} className={`mt-6 px-6 py-2 rounded ${isDisabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-red-700 text-white hover:bg-red-600"}`}>
				Очистити все обране
			</button>
		</div>
	);
}
