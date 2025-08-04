import { useGetAppointmentsQuery, useGetDoctorsQuery, useGetPatientsQuery } from "@/api";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Link } from "react-router";
import { frontRoutes } from "@/router/frontRoutes";
import AppointmentItem from "./AppointmentItem";

function AppointmentsList() {
	const { data: patients } = useGetPatientsQuery();
	const { data: doctors } = useGetDoctorsQuery();
	const { data: appointments, isLoading, isError } = useGetAppointmentsQuery();

	return (
		<>
			<div className="flex flex-wrap justify-between gap-4 mb-6">
				<h1 className="text-2xl text-center font-bold">Список записів</h1>
				<Link to={frontRoutes.navigate.appointments.create}>
					<button>Додати запис</button>
				</Link>
			</div>
			<LoadingSpinner isLoading={isLoading} />
			<ErrorMessage error={isError} />
			{appointments && (
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
					{appointments.map((item) => (
						<AppointmentItem key={item.id} data={item} patients={patients} doctors={doctors} />
					))}
				</div>
			)}
		</>
	);
}

export default AppointmentsList;
