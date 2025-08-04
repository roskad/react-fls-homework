import { NavLink, useLocation } from "react-router";
import MainMenu from "./MainMenu";
import logoSvg from "@/assets/images/logo.svg";
import { useDarkMode } from "@/hooks/useDarkMode";

function Header() {
	const { isDark, setIsDark } = useDarkMode();
	const location = useLocation();
	const isHome = location.pathname === "/";

	const logo = <img src={logoSvg} alt="Logo" className="w-12 h-12 mr-4" />;

	return (
		<header className="z-50 sticky top-0 p-3 bg-[var(--bg-dark)] shadow-md">
			<div className="container flex items-center justify-between">
				<div>
					{!isHome && (
						<NavLink to={"/"} end className="block h-full">
							{logo}
						</NavLink>
					)}
					{isHome && logo}
				</div>
				<MainMenu />
				<button onClick={() => setIsDark(!isDark)} className={`inline-flex h-6 w-11 items-center rounded-full px-1 transition outline-none `}>
					<span className={`absolute transition duration-300 transform ${isDark ? "translate-x-4" : "-translate-x-0.5"}`}>{isDark ? "🌙" : "☀️"}</span>
				</button>
			</div>
		</header>
	);
}

export default Header;
