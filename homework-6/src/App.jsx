import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router";

import "./App.css";
import Task1 from "./components/task1/Task1";
import Task2 from "./components/task2/Task2";
import Task3 from "./components/task3/Task3";
import Task4 from "./components/task4/Task4";

function App() {
	return (
		<Router basename="/react-fls-homework/06">
			<nav>
				<ul className="flex gap-8 list-none pl-0">
					<li>
						<Link to="/task1">Завдання 1</Link>
					</li>
					<li>
						<Link to="/task2">Завдання 2</Link>
					</li>
					<li>
						<Link to="/task3">Завдання 3</Link>
					</li>
					<li>
						<Link to="/task4">Завдання 4</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/" element={<Navigate to="/task1" />} />
				<Route path="/task1" element={<Task1 />} />
				<Route path="/task2" element={<Task2 />} />
				<Route path="/task3" element={<Task3 />} />
				<Route path="/task4" element={<Task4 />} />
			</Routes>
		</Router>
	);
}

export default App;
