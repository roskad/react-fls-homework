import { DarkModeContext } from "@/contexts/DarkModeContext";
import { useState, useEffect } from "react";

export function DarkModeProvider({ children }) {
	const [isDark, setIsDark] = useState(() => {
		const saved = localStorage.getItem("theme");
		if (saved) return saved === "dark";
		return window.matchMedia("(prefers-color-scheme: dark)").matches;
	});

	useEffect(() => {
		const root = document.documentElement;
		if (isDark) {
			root.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			root.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [isDark]);

	return <DarkModeContext value={{ isDark, setIsDark }}>{children}</DarkModeContext>;
}
