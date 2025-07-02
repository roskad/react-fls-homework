import { useNavigate } from "react-router";

function HomePage() {
	const navigate = useNavigate();
	return (
		<>
			<h1 className="mb-4 text-3xl text-center">Ласкаво просимо до додатку "Вчителі!"</h1>
			<p>Цей додаток допоможе вам керувати інформацією про вчителів, викликати їх на збори та дізнатись інорфаміцю про розробника</p>
			<div className="flex flex-wrap gap-4 mt-4">
				<button onClick={() => navigate("/teachers")}>Переглянути вчителів</button>
				<button onClick={() => navigate("/meetings")}>Переглянути список для зборів</button>
			</div>
		</>
	);
}

export default HomePage;
