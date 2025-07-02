import { useLocation, useNavigate } from "react-router";
import TeacherCard from "./teachers/components/TeacherCard";
import frontRoutes from "../routes/frontRoutes";
import { useEffect, useState } from "react";

function MeetingsPage() {
	const navigate = useNavigate();
	const { state } = useLocation();

	const [teachersList, setTeachersList] = useState([]);

	useEffect(() => {
		if (state?.teachers) {
			setTeachersList(state.teachers);
		}
	}, [state]);

	const handleRemoveTeacher = (id) => {
		setTeachersList((prev) => prev.filter((t) => t.id !== id));
	};

	let content;

	if (teachersList.length > 0)
		content = (
			<div className="flex flex-col gap-6">
				{teachersList.map((teacher) => (
					<TeacherCard key={teacher.id} teacher={teacher} onSelect={handleRemoveTeacher} isSelected={true} />
				))}
			</div>
		);
	else content = <p>Жодень вчитель не був обраний для участі у зборах...</p>;

	return (
		<>
			<h1 className="mb-4 text-3xl text-center">Учасники зборів</h1>
			<div className="my-4 py-3 px-4 rounded bg-slate-800 font-bold">Список вчителів ({teachersList.length}) для виклику на збори:</div>
			{content}
			<button onClick={() => navigate(frontRoutes.navigate.teachers.index)} className="mt-8">
				Повернутись до списку вчителів
			</button>
		</>
	);
}

export default MeetingsPage;
