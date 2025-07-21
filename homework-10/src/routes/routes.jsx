import { createBrowserRouter, Link } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import BusesPage from "@/pages/BusesPage";
import HotelsPage from "@/pages/HotelsPage";
import OrderPage from "@/pages/OrderPage";

export const routes = [
	{
		element: <MainLayout />,
		path: "",
		children: [
			{
				path: "/",
				element: <HomePage />,
				id: "home",
				handle: {
					crumb: () => <Link to="/">Головна</Link>,
					title: "Головна",
				},
			},
			{
				path: "buses",
				element: <BusesPage />,
				id: "buses",
				handle: {
					crumb: () => <Link to="/buses">Автобуси</Link>,
					title: "Автобуси",
				},
			},
			{
				path: "hotels",
				element: <HotelsPage />,
				id: "hotels",
				handle: {
					crumb: () => <Link to="/hotels">Готелі</Link>,
					title: "Готелі",
				},
			},
			{
				path: "order",
				element: <OrderPage />,
				id: "order",
				handle: {
					crumb: () => <Link to="/order">Замовлення</Link>,
					title: "Замовлення",
				},
			},
		],
	},
];

const router = createBrowserRouter(routes, {
	basename: "/react-fls-homework/10",
});
export default router;
