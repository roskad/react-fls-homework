import { Route, Routes } from "react-router";
import Home from "../pages/MainPage";
import Shop from "../pages/ShopPage";
import Rules from "../pages/RulesPage";
import Contacts from "../pages/ContactsPage";
import Page404 from "../pages/Page404";
import Layout from "../layout/Layout";
import ProductDetails from "../pages/products/ProductDetails";
import frontRoutes from "./frontRoutes";


function AppRoutes() {
	return (
		<Routes>
			<Route path={frontRoutes.pages.home} element={<Layout />}>
				<Route index element={<Home />} />
				<Route path={frontRoutes.pages.shop.index}>
					<Route index element={<Shop />} />
					<Route path="/shop/:id" element={<ProductDetails />} />
				</Route>
				<Route path={frontRoutes.pages.payment} element={<Rules />} />
				<Route path={frontRoutes.pages.contacts} element={<Contacts />} />
				<Route path="*" element={<Page404 />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;
