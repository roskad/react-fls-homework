import { useNavigate } from "react-router";
import frontRoutes from "../../routes/frontRoutes";
function GoHomeButton() {
	const navigate = useNavigate();

	function goHome() {
		navigate(frontRoutes.navigate.home);
	}

	return (
		<button onClick={goHome} className="mt-4">
			На головну
		</button>
	);
}

export default GoHomeButton;
