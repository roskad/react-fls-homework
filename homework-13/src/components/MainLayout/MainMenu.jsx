import React from "react";
import { NavLink } from "react-router";
import { pagesRoutes } from "@/router/routes";

const MainMenu = () => {
	return (
		<nav>
			<ul className="container flex justify-center list-none gap-4 font-medium">
				{pagesRoutes
					.filter((route) => !route.meta.notInMenu)
					.map(({ path, meta }) => (
						<li key={path}>
							<NavLink to={path} className={({ isActive }) => (isActive ? "underline" : "")} end={path === "/"}>
								{meta.title}
							</NavLink>
						</li>
					))}
			</ul>
		</nav>
	);
};

export default MainMenu;
