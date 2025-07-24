import { Outlet } from "react-router";
import Header from "./Header";

function MainLayout() {
	return (
		<>
			<Header />
			<main className="mt-4 pb-6">
				<Outlet />
			</main>
		</>
	);
}

export default MainLayout;
