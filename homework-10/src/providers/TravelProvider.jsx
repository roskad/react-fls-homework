import { TravelContext } from "@/contexts/TravelContext";
import { useReducer } from "react";

const initialState = {
	buses: [],
	hotels: [],
};

function reducer(state, action) {
	switch (action.type) {
		case "TOGGLE_BUS":
			return {
				...state,
				buses: state.buses.some((bus) => bus.id === action.payload.id) ? state.buses.filter((bus) => bus.id !== action.payload.id) : [...state.buses, action.payload],
			};
		case "TOGGLE_HOTEL":
			return {
				...state,
				hotels: state.hotels.some((hotel) => hotel.id === action.payload.id) ? state.hotels.filter((hotel) => hotel.id !== action.payload.id) : [...state.hotels, action.payload],
			};
		case "CLEAR_ALL":
			return {
				buses: [],
				hotels: [],
			};
		default:
			return state;
	}
}

export function TravelProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <TravelContext value={{ state, dispatch }}>{children}</TravelContext>;
}
