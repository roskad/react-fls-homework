import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { TravelProvider } from "@/providers/TravelProvider";

function MainLayout() {
	return (
		<>
			<Header />
			<main className="container py-6 px-4 flex-grow-1">
				<TravelProvider>
					<Outlet />
				</TravelProvider>
			</main>
			<Footer />
		</>
	);
}

export default MainLayout;
