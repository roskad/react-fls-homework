import { useGetDoctorsQuery } from "@/api";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Link } from "react-router";
import { frontRoutes } from "@/router/frontRoutes";
import DoctorItem from "./DoctorItem";

function DoctorsList() {
	const { data, isLoading, isError } = useGetDoctorsQuery();

	return (
		<>
			<div className="flex flex-wrap justify-between gap-4 mb-6">
				<h1 className="text-2xl text-center font-bold">Список лікарів</h1>
				<Link to={frontRoutes.navigate.doctors.create}>
					<button>Додати лікаря</button>
				</Link>
			</div>
			<LoadingSpinner isLoading={isLoading} />
			<ErrorMessage error={isError} />
			{data && (
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
					{data.map((item) => (
						<DoctorItem key={item.id} data={item} />
					))}
				</div>
			)}
		</>
	);
}

export default DoctorsList;
