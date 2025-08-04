import { pagesRoutes } from "@/router/routes";
import { NavLink } from "react-router";

function MainMenu() {
	const activeLinkStyle = "text-orange-400 transition-colors duration-300 ease";

	return (
		<nav className="flex list-none gap-6 font-medium">
			{pagesRoutes
				.filter((route) => !route.meta.notInMenu)
				.map(({ path, meta }) => (
					<li key={path}>
						<NavLink to={path} className={({ isActive }) => (isActive ? activeLinkStyle : "")} end={path === "/"}>
							{meta.title}
						</NavLink>
					</li>
				))}
		</nav>
	);
}

export default MainMenu;
