import { Outlet } from "react-router";
import GoHomeButton from "./components/GoHomeButton";

function SimpleLayout() {
	return (
		<div className="container p-4">
			<Outlet />
			<GoHomeButton />
		</div>
	);
}

export default SimpleLayout;
