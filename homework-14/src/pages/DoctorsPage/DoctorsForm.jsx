import { useAddDoctorMutation, useGetDoctorByIdQuery, useUpdateDoctorMutation } from "@/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function DoctorsForm() {
	const { id } = useParams();
	const isEdit = Boolean(id);
	const navigate = useNavigate();

	const [formFields, setFormFields] = useState({
		fullName: "",
		specialty: "",
		phone: "",
		email: "",
		room: "",
		notes: "",
	});

	const {
		data: doctor,
		isLoading,
		isError,
	} = useGetDoctorByIdQuery(id, {
		skip: !isEdit,
	});

	const [updateDoctor, { isLoading: isUpdating }] = useUpdateDoctorMutation();
	const [addDoctor, { isLoading: isAdding }] = useAddDoctorMutation();

	useEffect(() => {
		if (isEdit && doctor) {
			setFormFields({
				fullName: doctor.fullName || "",
				specialty: doctor.specialty || "",
				phone: doctor.phone || "",
				email: doctor.email || "",
				room: doctor.room || "",
				notes: doctor.notes || "",
			});
		}
		if (!isEdit) {
			setFormFields({
				fullName: "",
				specialty: "",
				phone: "",
				email: "",
				room: "",
				notes: "",
			});
		}
	}, [isEdit, doctor]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (isEdit) {
				await updateDoctor({
					id,
					...formFields,
				}).unwrap();
			} else {
				await addDoctor(formFields).unwrap();
			}
			navigate("/doctors");
		} catch (error) {
			alert("Помилка збереження даних лікаря");
		}
	};

	if (isEdit && isLoading) return <p>Завантаження...</p>;
	if (isEdit && isError) return <p>Помилка завантаження лікаря</p>;
	if (isEdit && !doctor) return <p>Лікаря не знайдено</p>;

	return (
		<div className="max-w-xl mx-auto mt-8">
			<h2 className="text-2xl mb-4">{isEdit ? "Редагувати дані лікаря" : "Додати нового лікаря"}</h2>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<label>
					Ім'я:
					<input type="text" className="border rounded px-2 py-1 w-full" name="fullName" value={formFields.fullName} onChange={handleChange} required />
				</label>
				<label>
					Спеціальність:
					<input type="text" className="border rounded px-2 py-1 w-full" name="specialty" value={formFields.specialty} onChange={handleChange} required />
				</label>
				<label>
					Номер телефону:
					<input type="tel" className="border rounded px-2 py-1 w-full" name="phone" value={formFields.phone} onChange={handleChange} required />
				</label>
				<label>
					Електронна пошта:
					<input type="email" className="border rounded px-2 py-1 w-full" name="email" value={formFields.email} onChange={handleChange} required />
				</label>
				<label>
					Кабінет:
					<input type="text" className="border rounded px-2 py-1 w-full resize-y" name="room" value={formFields.room} onChange={handleChange} required />
				</label>
				<label>
					Нотатки:
					<textarea className="border rounded px-2 py-1 w-full resize-y" name="notes" value={formFields.notes} onChange={handleChange} rows={4} />
				</label>
				<button type="submit" disabled={isUpdating || isAdding}>
					{isUpdating || isAdding ? "Збереження..." : isEdit ? "Зберегти" : "Додати"}
				</button>
			</form>
		</div>
	);
}

export default DoctorsForm;
