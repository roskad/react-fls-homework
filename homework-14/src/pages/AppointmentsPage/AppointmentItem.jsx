import { frontRoutes } from "@/router/frontRoutes";
import { useNavigate } from "react-router";
import { useUpdateAppointmentMutation } from "@/api";
import { useContext, useMemo } from "react";
import { DarkModeContext } from "@/contexts/DarkModeContext";

function AppointmentItem({ data, patients, doctors }) {
	const navigate = useNavigate();
	const [updateAppointment] = useUpdateAppointmentMutation();

	const { isDark } = useContext(DarkModeContext);

	const patient = useMemo(() => patients?.find((p) => p.id === data.patientId), [patients, data.patientId]);
	const doctor = useMemo(() => doctors?.find((d) => d.id === data.doctorId), [doctors, data.doctorId]);

	const handleStatusChange = async (e) => {
		const newStatus = e.target.value;
		try {
			await updateAppointment({
				...data,
				status: newStatus,
			});
		} catch (err) {
			alert("Не вдалося оновити статус прийому");
		}
	};

	const statusOptions = [
		{ value: "scheduled", label: "Заплановано" },
		{ value: "active", label: "Активний" },
		{ value: "completed", label: "Завершено" },
		{ value: "cancelled", label: "Скасовано" },
	];

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

		return (isDark ? dark : light)[data.status] || "bg-gray-100";
	}, [data.status, isDark]);

	return (
		<div className="bg-[var(--bg-card)] shadow-md rounded-lg transition duration-200 hover:shadow-lg">
			<div className="flex flex-wrap items-start justify-between gap-7 px-6 py-4">
				<div>
					<h2 className="mb-3 text-xl font-semibold">Пацієнт: {patient?.fullName || "—"}</h2>
					<p className="mb-2">
						<span className="font-medium">Лікар:</span> {doctor?.fullName || "—"}
					</p>
					<p className="text-sm mb-2">
						<span className="font-medium">Дата та час:</span>{" "}
						{new Date(data.date).toLocaleString("uk-UA", {
							year: "numeric",
							month: "2-digit",
							day: "2-digit",
							hour: "2-digit",
							minute: "2-digit",
						})}
					</p>
					<p className="text-sm mb-2">
						<span className="font-medium">Причина:</span> {data.reason}
					</p>
				</div>
				<div className="flex lg:flex-col gap-2">
					<select className={`text-sm px-2 py-1 rounded border transition ${statusBgClass}`} value={data.status} onChange={handleStatusChange}>
						{statusOptions.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
					<button onClick={() => navigate(frontRoutes.navigate.appointments.edit(data.id))} className="text-sm px-3 py-1">
						Редагувати
					</button>
				</div>
			</div>
		</div>
	);
}

export default AppointmentItem;
