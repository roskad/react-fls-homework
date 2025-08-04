import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { store } from "./store";
import router from "./router";
import { DarkModeProvider } from "./providers/DarkModeProvider";

createRoot(document.getElementById("root")).render(
	<DarkModeProvider>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</DarkModeProvider>
);
