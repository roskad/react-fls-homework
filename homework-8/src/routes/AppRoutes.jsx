import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import frontRoutes from "./frontRoutes";
import HomePage from "../pages/HomePage";
import TeacherPage from "../pages/teachers/TeachersPage";
import TeacherEdit from "../pages/teachers/TeacherEdit";
import MeetingsPage from "../pages/MeetingsPage";
import SimpleLayout from "../layouts/SimpleLayout";
import AboutAppPage from "../pages/AboutAppPage";
import AboutDevPage from "../pages/AboutDevPage";

function AppRoutes() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path={frontRoutes.pages.home} element={<HomePage />} />
				<Route path={frontRoutes.pages.teachers.index}>
					<Route index element={<TeacherPage />} />
					<Route path={frontRoutes.pages.teachers.add} element={<TeacherEdit />} />
					<Route path={frontRoutes.pages.teachers.edit} element={<TeacherEdit />} />
				</Route>
				<Route path={frontRoutes.pages.meetings} element={<MeetingsPage />} />
			</Route>
			<Route element={<SimpleLayout />}>
				<Route path={frontRoutes.pages.aboutApp} element={<AboutAppPage />} />
				<Route path={frontRoutes.pages.aboutDev} element={<AboutDevPage />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;
