import { useNavigate } from "react-router";
import { frontRoutes } from "@/router/frontRoutes";
import { useDeletePatientMutation } from "@/api";

function PatientItem({ data }) {
	const navigate = useNavigate();

	const [deletePatient] = useDeletePatientMutation();

	return (
		<div className="bg-[var(--bg-card)] shadow-md rounded-lg transition duration-200 hover:shadow-lg">
			<div className="flex flex-wrap items-start justify-between gap-7 px-6 py-4">
				<div>
					<h2 className="mb-3 text-xl font-semibold">{data.fullName}</h2>
					<p className="text-sm mb-2">
						<span className="font-medium">Дата народження:</span> {data.birthDate}
					</p>
					<p className="text-sm mb-2">
						<span className="font-medium">Стать:</span> {data.gender === "male" ? "Чоловік" : "Жінка"}
					</p>
					<p className="text-sm mb-2">
						<span className="font-medium">Телефон:</span> {data.phone}
					</p>
					<p className="text-sm mb-2">
						<span className="font-medium">Email:</span> {data.email}
					</p>
					<p className="text-sm mb-2">
						<span className="font-medium">Адреса:</span> {data.address}
					</p>
					{data.notes && (
						<p className="text-sm mt-3">
							<span className="font-medium">
								<strong>Нотатки:</strong>
							</span>{" "}
							{data.notes}
						</p>
					)}
				</div>
				<div className="flex lg:flex-col gap-2">
					<button onClick={() => navigate(frontRoutes.navigate.patients.edit(data.id))} className="text-sm px-3 py-1">
						Редагувати
					</button>
					<button
						onClick={() => {
							if (window.confirm("Ви дійсно бажаєте видалити пацієнта?")) deletePatient(data.id);
						}}
						className="text-sm px-3 py-1 bg-red-800 hover:bg-red-900 transition"
					>
						Видалити
					</button>
				</div>
			</div>
		</div>
	);
}

export default PatientItem;
