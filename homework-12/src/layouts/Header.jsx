import MainMenu from "./MainMenu";

function Header() {
	return (
		<div className="sticky top-0 p-3 bg-[var(--bg-dark)] shadow-md">
			<MainMenu />
		</div>
	);
}

export default Header;
