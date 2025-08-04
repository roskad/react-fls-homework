import { useAddAppointmentMutation, useUpdateAppointmentMutation, useGetAppointmentByIdQuery, useGetPatientsQuery, useGetDoctorsQuery } from "@/api";
import { DarkModeContext } from "@/contexts/DarkModeContext";
import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";

function AppointmentForm() {
	const { id } = useParams();
	const isEdit = Boolean(id);
	const navigate = useNavigate();

	const { isDark } = useContext(DarkModeContext);

	const [formFields, setFormFields] = useState({
		patientId: "",
		doctorId: "",
		date: "",
		reason: "",
		status: "scheduled",
	});

	const { data: patients } = useGetPatientsQuery();
	const { data: doctors } = useGetDoctorsQuery();

	const {
		data: appointment,
		isLoading,
		isError,
	} = useGetAppointmentByIdQuery(id, {
		skip: !isEdit,
	});

	const [addAppointment, { isLoading: isAdding }] = useAddAppointmentMutation();
	const [updateAppointment, { isLoading: isUpdating }] = useUpdateAppointmentMutation();

	useEffect(() => {
		if (isEdit && appointment) {
			setFormFields({
				patientId: appointment.patientId || "",
				doctorId: appointment.doctorId || "",
				date: appointment.date || "",
				reason: appointment.reason || "",
				status: appointment.status || "scheduled",
			});
		}
		if (!isEdit) {
			setFormFields({
				patientId: "",
				doctorId: "",
				date: "",
				reason: "",
				status: "scheduled",
			});
		}
	}, [isEdit, appointment]);

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
				await updateAppointment({
					id,
					...formFields,
				}).unwrap();
			} else {
				await addAppointment(formFields).unwrap();
			}
			navigate("/appointments");
		} catch (err) {
			alert("Помилка збереження прийому");
		}
	};

	const statusBgClass = useMemo(() => {
		const light = {
			scheduled: "bg-yellow-100",
			active: "bg-blue-100",
			completed: "bg-green-100",
			cancelled: "bg-red-100",
		};
		const dark = {
			scheduled: "bg-yellow-800 text-white",
			active: "bg-blue-800 text-white",
			completed: "bg-green-800 text-white",
			cancelled: "bg-red-800 text-white",
		};
		return (isDark ? dark : light)[formFields.status] || "bg-gray-100";
	}, [formFields.status, isDark]);

	if (isEdit && isLoading) return <p>Завантаження...</p>;
	if (isEdit && isError) return <p>Помилка завантаження прийому</p>;
	if (isEdit && !appointment) return <p>Прийом не знайдено</p>;

	return (
		<div className="max-w-xl mx-auto mt-8">
			<h2 className="text-2xl mb-4">{isEdit ? "Редагувати прийом" : "Додати новий прийом"}</h2>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<label>
					Пацієнт:
					<select name="patientId" className={`border rounded px-2 py-1 w-full ${isDark ? "bg-[var(--bg-color)]" : ""}`} value={formFields.patientId} onChange={handleChange} required>
						<option value="">Оберіть пацієнта</option>
						{patients?.map((p) => (
							<option key={p.id} value={p.id}>
								{p.fullName}
							</option>
						))}
					</select>
				</label>

				<label>
					Лікар:
					<select name="doctorId" className={`border rounded px-2 py-1 w-full ${isDark ? "bg-[var(--bg-color)]" : ""}`} value={formFields.doctorId} onChange={handleChange} required>
						<option value="">Оберіть лікаря</option>
						{doctors?.map((d) => (
							<option key={d.id} value={d.id}>
								{d.fullName} — {d.specialty}
							</option>
						))}
					</select>
				</label>

				<label>
					Дата та час:
					<input type="datetime-local" name="date" className="border rounded px-2 py-1 w-full" value={formFields.date} onChange={handleChange} required />
				</label>

				<label>
					Причина:
					<textarea name="reason" className="border rounded px-2 py-1 w-full resize-y" value={formFields.reason} onChange={handleChange} rows={3} required />
				</label>

				<label>
					Статус:
					<select name="status" className={`border rounded px-2 py-1 w-full transition ${statusBgClass}`} value={formFields.status} onChange={handleChange} required>
						<option value="scheduled">Заплановано</option>
						<option value="active">Активний</option>
						<option value="completed">Завершено</option>
						<option value="cancelled">Скасовано</option>
					</select>
				</label>

				<button type="submit" disabled={isAdding || isUpdating}>
					{isAdding || isUpdating ? "Збереження..." : isEdit ? "Зберегти зміни" : "Додати прийом"}
				</button>
			</form>
		</div>
	);
}

export default AppointmentForm;
