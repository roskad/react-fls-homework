import { useState } from "react";
import { useGetPatientsQuery } from "@/api";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";
import PatientItem from "./PatientItem";
import { Link } from "react-router";
import { frontRoutes } from "@/router/frontRoutes";
import useDebounce from "@/hooks/useDebounce";

function PatientsList() {
	const [search, setSearch] = useState("");
	const debouncedSearch = useDebounce(search, 300);
	const nameParam = debouncedSearch.trim() === "" ? undefined : debouncedSearch.trim();
	const { data, isLoading, isError } = useGetPatientsQuery(nameParam);

	return (
		<>
			<div className="flex flex-wrap justify-between gap-4 mb-6 items-center">
				<h1 className="text-2xl font-bold">Список пацієнтів</h1>
				<Link to={frontRoutes.navigate.patients.create}>
					<button>Додати пацієнта</button>
				</Link>
			</div>

			<input type="text" placeholder="Пошук за ім'ям..." value={search} onChange={(e) => setSearch(e.target.value)} className="border px-3 py-2 rounded w-full max-w-sm mb-6" />

			<LoadingSpinner isLoading={isLoading} />
			<ErrorMessage error={isError} />

			{data?.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
					{data.map((item) => (
						<PatientItem key={item.id} data={item} />
					))}
				</div>
			) : (
				!isLoading && <p className="text-center">Пацієнта не знайдено</p>
			)}
		</>
	);
}

export default PatientsList;
