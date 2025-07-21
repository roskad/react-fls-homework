import { NavLink, useLocation } from "react-router";
import { routes } from "@/routes/routes";
import { useDarkMode } from "@/hooks/useDarkMode";

function Header() {
	const { isDark, setIsDark } = useDarkMode();
	const location = useLocation();
	const isHome = location.pathname === "/";

	const logoColor = isDark ? "#fcfcfc" : "#343f64";

	const logo = (
		<svg width="70" height="40" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M37.2551 1.61586C38.1803 0.653384 39.4368 0.112671 40.7452 0.112671C46.6318 0.112671 52.1793 0.112674 57.6424 0.112685C68.6302 0.112708 74.1324 13.9329 66.3629 22.0156L49.4389 39.6217C48.662 40.43 47.3335 39.8575 47.3335 38.7144V23.2076L49.2893 21.1729C50.8432 19.5564 49.7427 16.7923 47.5451 16.7923H22.6667L37.2551 1.61586Z" fill={logoColor}></path>
			<path d="M32.7449 38.3842C31.8198 39.3467 30.5633 39.8874 29.2549 39.8874C23.3683 39.8874 17.8208 39.8874 12.3577 39.8874C1.36983 39.8873 -4.13236 26.0672 3.63721 17.9844L20.5612 0.378369C21.3381 -0.429908 22.6666 0.142547 22.6666 1.28562L22.6667 16.7923L20.7108 18.8271C19.1569 20.4437 20.2574 23.2077 22.455 23.2077L47.3335 23.2076L32.7449 38.3842Z" fill={logoColor}></path>
		</svg>
	);

	const rootRoute = routes[0];
	const children = rootRoute?.children || [];
	const activeLinkStyle = "pb-1 text-[var(--accent)] border-b border-b-[var(--accent)]";

	return (
		<header className="flex gap-4 justify-between p-4 bg-[var(--bg-dark)]">
			<div className="container flex flex-wrap items-center justify-between">
				<div className="h-10">
					{!isHome && (
						<NavLink to={"/"} end className="block h-full">
							{logo}
						</NavLink>
					)}
					{isHome && logo}
				</div>
				<div className="flex items-center gap-5">
					<nav>
						<ul className="flex flex-wrap gap-3">
							{children.map((child, i) => (
								<li key={i}>
									<NavLink to={child.path} className={({ isActive }) => (isActive ? activeLinkStyle : "")} end>
										{child.handle?.title}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
					<button onClick={() => setIsDark(!isDark)} className={`inline-flex h-6 w-11 items-center rounded-full px-1 transition ${isDark ? "bg-gray-600" : "bg-gray-300"}`}>
						<span className={`absolute transition duration-300 transform ${isDark ? "translate-x-4" : "-translate-x-0.5"}`}>{isDark ? "🌙" : "☀️"}</span>
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
