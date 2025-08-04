import { useAddPatientMutation, useGetPatientByIdQuery, useUpdatePatientMutation } from "@/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function PatientsForm() {
	const { id } = useParams();
	const isEdit = Boolean(id);
	const navigate = useNavigate();

	const [formFields, setFormFields] = useState({
		fullName: "",
		birthDate: "",
		gender: "",
		phone: "",
		email: "",
		address: "",
		notes: "",
	});

	const {
		data: patient,
		isLoading,
		isError,
	} = useGetPatientByIdQuery(id, {
		skip: !isEdit,
	});

	const [updatePatient, { isLoading: isUpdating }] = useUpdatePatientMutation();
	const [addPatient, { isLoading: isAdding }] = useAddPatientMutation();

	useEffect(() => {
		if (isEdit && patient) {
			setFormFields({
				fullName: patient.fullName || "",
				birthDate: patient.birthDate || "",
				gender: patient.gender || "",
				phone: patient.phone || "",
				email: patient.email || "",
				address: patient.address || "",
				notes: patient.notes || "",
			});
		}
		if (!isEdit) {
			setFormFields({
				fullName: "",
				birthDate: "",
				gender: "",
				phone: "",
				email: "",
				address: "",
				notes: "",
			});
		}
	}, [isEdit, patient]);

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
				await updatePatient({
					id,
					...formFields,
				}).unwrap();
			} else {
				await addPatient(formFields).unwrap();
			}
			navigate("/patients");
		} catch (error) {
			alert("Помилка збереження даних пацієнта");
		}
	};

	if (isEdit && isLoading) return <p>Завантаження...</p>;
	if (isEdit && isError) return <p>Помилка завантаження пацієнта</p>;
	if (isEdit && !patient) return <p>Пацієнта не знайдено</p>;

	return (
		<div className="max-w-xl mx-auto mt-8">
			<h2 className="text-2xl mb-4">{isEdit ? "Редагувати дані пацієнта" : "Додати нового пацієнта"}</h2>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<label>
					Ім'я:
					<input type="text" className="border rounded px-2 py-1 w-full" name="fullName" value={formFields.fullName} onChange={handleChange} required />
				</label>
				<label>
					Дата народження:
					<input type="date" className="border rounded px-2 py-1 w-full" name="birthDate" value={formFields.birthDate} onChange={handleChange} required />
				</label>
				<div>
					<p>Стать:</p>
					<div className="flex flex-wrap gap-2">
						<label>
							Чоловік&nbsp;
							<input type="radio" name="gender" value="male" checked={formFields.gender === "male"} onChange={handleChange} />
						</label>
						<label>
							Жінка&nbsp;
							<input type="radio" name="gender" value="female" checked={formFields.gender === "female"} onChange={handleChange} />
						</label>
					</div>
				</div>
				<label>
					Номер телефону:
					<input type="tel" className="border rounded px-2 py-1 w-full" name="phone" value={formFields.phone} onChange={handleChange} required />
				</label>
				<label>
					Електронна пошта:
					<input type="email" className="border rounded px-2 py-1 w-full" name="email" value={formFields.email} onChange={handleChange} required />
				</label>
				<label>
					Адреса:
					<textarea className="border rounded px-2 py-1 w-full resize-y" name="address" value={formFields.address} onChange={handleChange} rows={1} required />
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

export default PatientsForm;
