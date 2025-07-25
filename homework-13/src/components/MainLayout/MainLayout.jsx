import React from "react";
import { Outlet } from "react-router";
import MainMenu from "./MainMenu";

const MainLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="sticky top-0 p-3 bg-[var(--bg-dark)] shadow-md">
				<h1 className="text-center">React + RTK Query додаток</h1>
				<MainMenu />
			</header>
			<main className="flex-grow mt-4 pb-6">
				<Outlet />
			</main>
			<footer className="bg-[var(--bg-dark)] text-center p-4">© React RTK Query App</footer>
		</div>
	);
};

export default MainLayout;
