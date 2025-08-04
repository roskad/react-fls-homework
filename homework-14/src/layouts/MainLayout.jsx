import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function MainLayout() {
	return (
		<>
			<Header />
			<main className="container flex-grow relative">
				<div className="py-5">
					<Outlet />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default MainLayout;
