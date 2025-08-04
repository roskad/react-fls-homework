import HomePage from "@/pages/HomePage";
import PatientsPage from "@/pages/PatientsPage";
import DoctorsPage from "@/pages/DoctorsPage";
import PatientsForm from "@/pages/PatientsPage/PatientsForm";
import DoctorsForm from "@/pages/DoctorsPage/DoctorsForm";
import AppointmentsPage from "@/pages/AppointmentsPage/AppointmentsPage";
import AppointmentsForm from "@/pages/AppointmentsPage/AppointmentsForm";
import MainLayout from "@/layouts/MainLayout";
import { frontRoutes } from "./frontRoutes";

export const pagesRoutes = [
	{
		path: frontRoutes.pages.home,
		element: <HomePage />,
		meta: { title: "Головна", notInMenu: true },
	},
	{
		path: frontRoutes.pages.patients.base,
		element: <PatientsPage />,
		meta: { title: "Пацієнти" },
	},
	{
		path: frontRoutes.pages.patients.edit,
		element: <PatientsForm />,
		meta: { notInMenu: true },
	},
	{
		path: frontRoutes.pages.doctors.base,
		element: <DoctorsPage />,
		meta: { title: "Лікарі" },
	},
	{
		path: frontRoutes.pages.doctors.edit,
		element: <DoctorsForm />,
		meta: { notInMenu: true },
	},
	{
		path: frontRoutes.pages.appointments.base,
		element: <AppointmentsPage />,
		meta: { title: "Призначення" },
	},
	{
		path: frontRoutes.pages.appointments.edit,
		element: <AppointmentsForm />,
		meta: { notInMenu: true },
	},
];

const routes = [
	{
		element: <MainLayout />,
		children: pagesRoutes,
	},
	// { path: "*", element: <Navigate to="/" replace /> },
];

export default routes;
