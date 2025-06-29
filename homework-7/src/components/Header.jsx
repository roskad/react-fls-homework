import logo from "../assets/img/logo.svg";
import { NavLink, useLocation } from "react-router";
import frontRoutes from "../routes/frontRoutes";

function Header() {
	const location = useLocation();
	const isHome = location.pathname === frontRoutes.pages.home;

	return (
		<header className="flex gap-4 justify-between">
			<div>
				{!isHome && (
					<NavLink to={frontRoutes.pages.home} end>
						<img src={logo} alt="Logo" className="w-10 bg-white" />
					</NavLink>
				)}
				{isHome && <img src={logo} alt="Logo" className="w-10 bg-white" />}
			</div>
			<nav>
				<ul className="flex gap-3">
					<li>
						<NavLink to={frontRoutes.pages.home} end className={({ isActive }) => (isActive ? "underline" : "")}>
							Головна
						</NavLink>
					</li>
					<li>
						<NavLink to={frontRoutes.pages.shop.index} end className={({ isActive }) => (isActive ? "underline" : "")}>
							Магазин
						</NavLink>
					</li>
					<li>
						<NavLink to={frontRoutes.pages.payment} end className={({ isActive }) => (isActive ? "underline" : "")}>
							Правила оплати
						</NavLink>
					</li>
					<li>
						<NavLink to={frontRoutes.pages.contacts} end className={({ isActive }) => (isActive ? "underline" : "")}>
							Контакти
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
