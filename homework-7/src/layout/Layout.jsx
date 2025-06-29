import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
	return (
		<>
			<Header />
			<main className="my-15 flex-grow">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default Layout;
