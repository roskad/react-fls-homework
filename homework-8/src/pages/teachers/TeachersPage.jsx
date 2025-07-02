import { useNavigate } from "react-router";
import useTeachersApi from "../../hooks/useTeachersApi";
import { useEffect, useState } from "react";
import TeacherCard from "./components/TeacherCard";
import frontRoutes from "../../routes/frontRoutes";

function TeacherPage() {
	const navigate = useNavigate();
	const { data: teachersList, loading, error, fetchTeachers, deleteTeacher } = useTeachersApi();
	const [selectedTeachersId, setSelectedTeachersId] = useState([]);

	useEffect(() => {
		fetchTeachers();
	}, [fetchTeachers]);

	function addNewTeacher() {
		navigate(frontRoutes.navigate.teachers.add);
	}

	function goToMeeting() {
		navigate(frontRoutes.navigate.meetings, {
			state: {
				teachers: teachersList.filter((teacher) => selectedTeachersId.includes(teacher.id)),
			},
		});
	}

	function editTeacher(teacherId) {
		navigate(frontRoutes.navigate.teachers.edit(teacherId));
	}

	function deleteTeacherCheck(teacherId) {
		const isAgreed = confirm("Ви впевнені що хочете видалити вчителя?");

		if (isAgreed) {
			deleteTeacher(teacherId);
		}
	}

	const onSelect = (id) => {
		if (selectedTeachersId.includes(id)) setSelectedTeachersId((prev) => prev.filter((tId) => tId !== id));
		else setSelectedTeachersId((prev) => [...prev, id]);
	};

	let content;
	if (loading) content = <h2>Завантаження списку вчителів...</h2>;
	else if (error) content = <h2>Сталася помилка під час завантаження. Спробуйте пізніше...</h2>;
	else
		content = (
			<div className="flex flex-col gap-8">
				{teachersList.map((teacher) => (
					<div key={teacher.id}>
						<TeacherCard teacher={teacher} onSelect={onSelect} isSelected={selectedTeachersId.includes(teacher.id)} />
						<div className="mt-3 flex gap-4">
							<button onClick={() => editTeacher(teacher.id)} className="bg-blue-500 hover:bg-blue-600">
								Редагувати
							</button>
							<button onClick={() => deleteTeacherCheck(teacher.id)} className="bg-amber-700 hover:bg-amber-800">
								Видалити
							</button>
						</div>
					</div>
				))}
			</div>
		);

	let goToMeetingButton;
	if (selectedTeachersId.length !== 0) {
		goToMeetingButton = <button onClick={goToMeeting}>Викликати {selectedTeachersId.length} вчителів на збори</button>;
	} else {
		goToMeetingButton = <button className="bg-gray-600 pointer-events-none">Виберіть вчителів</button>;
	}

	return (
		<div>
			<h1 className="text-3xl text-center">Список вчителів</h1>
			<div className="flex flex-wrap gap-6 gap-y-3 my-4">
				<button onClick={addNewTeacher}>Додати нового вчителя</button>
				{goToMeetingButton}
			</div>
			{content}
		</div>
	);
}

export default TeacherPage;
