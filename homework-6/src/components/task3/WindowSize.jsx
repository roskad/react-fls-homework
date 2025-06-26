import useWindowSize from "./useWindowSize";
import { FaMobileAlt, FaTabletAlt, FaDesktop } from "react-icons/fa";

function WindowSize() {
	const { width, height } = useWindowSize();

	let currentDevice;

	if (width <= 1024 && width > 768) {
		currentDevice = <FaTabletAlt />;
	} else if (width <= 768) {
		currentDevice = <FaMobileAlt />;
	} else {
		currentDevice = <FaDesktop />;
	}

	return (
		<div className="relative pt-4 px-4 pb-8 border-4 border-blue-300 rounded">
			<h2 className="flex flex-wrap items-center justify-center gap-2 text-2xl text-center">Поточний девайс {currentDevice}</h2>
			<span className="absolute bottom-0 right-0">
				{width}px x {height}px
			</span>
		</div>
	);
}

export default WindowSize;
