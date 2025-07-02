import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import frontRoutes from "../../routes/frontRoutes";
import useTeachersApi from "../../hooks/useTeachersApi";

function TeacherEdit() {
	const { loading, error, getTeacherById, addTeacher, updateTeacher } = useTeachersApi();

	const [teacher, setTeacher] = useState({ name: "", subject: "", photo: "" });
	const { id } = useParams();
	const navigate = useNavigate();
	const isEditing = !!id;

	useEffect(() => {
		if (isEditing) {
			(async () => {
				const data = await getTeacherById(id);
				if (data) setTeacher(data);
				else navigate(frontRoutes.navigate.teachers.index);
			})();
		}
	}, [id, getTeacherById, navigate, isEditing]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setTeacher((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (isEditing) {
			await updateTeacher(id, teacher);
		} else {
			await addTeacher(teacher);
		}

		navigate(frontRoutes.navigate.teachers.index);
	};

	const isLoading = isEditing && !teacher?.id;

	if (isLoading || loading) {
		return <div>Завантаження...</div>;
	}

	return (
		<form onSubmit={handleSubmit}>
			<h1 className="mb-6 text-3xl text-center">{isEditing ? "Редагувати вчителя" : "Додати нового вчителя"}</h1>

			<label className="flex gap-2 items-center mb-4">
				Ім'я:
				<input name="name" value={teacher.name} onChange={handleChange} placeholder="Введіть ім'я вчителя" className="max-w-2xs w-full border-b border-gray-400 focus:outline-none focus:border-[var(--accent)]" required />
			</label>

			<label className="flex gap-2 items-center mb-4">
				Предмет:
				<input name="subject" value={teacher.subject} onChange={handleChange} placeholder="Введіть предмет викладання" className="max-w-2xs w-full border-b border-gray-400 focus:outline-none focus:border-[var(--accent)]" required />
			</label>

			<label className="flex gap-2 items-center">
				Фото URL (необов'язково):
				<input name="photo" value={teacher.photo} onChange={handleChange} placeholder="Введіть URL фотографії" className="max-w-2xs w-full border-b border-gray-400 focus:outline-none focus:border-[var(--accent)]" />
			</label>

			<div className="flex gap-4 mt-6">
				<button type="submit" className="bg-blue-500 hover:bg-blue-600">
					Зберегти
				</button>
				<button type="button" className="bg-amber-700 hover:bg-amber-800" onClick={() => navigate(frontRoutes.navigate.teachers.index)}>
					Скасувати
				</button>
			</div>

			{error && <p className="text-red-500 mt-4">Помилка: {error.message}</p>}
		</form>
	);
}

export default TeacherEdit;
