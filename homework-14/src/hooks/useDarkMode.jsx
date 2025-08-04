import { DarkModeContext } from "@/contexts/DarkModeContext";
import { useContext } from "react";

export function useDarkMode() {
	return useContext(DarkModeContext);
}
