import { BrowserRouter } from "react-router";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
	return (
		<BrowserRouter basename="/react-fls-homework/08">
			<AppRoutes />
		</BrowserRouter>
	);
}

export default App;
