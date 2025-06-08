import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Task1 from "./components/task1/Task1";
import Task2 from "./components/task2/Task2";
import Task3 from "./components/task3/Task3";
import Task4 from "./components/task4/Task4";
import Task5 from "./components/task5/Task5";
import Task6 from "./components/task6/Task6";

import "./App.scss";

function App() {
	return (
		<Router basename="/react-fls-homeworks/02">
			<nav className="tasks-nav">
				<ul>
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
					<li>
						<Link to="/task5">Завдання 5</Link>
					</li>
					<li>
						<Link to="/task6">Завдання 6</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/" element={<Navigate to="/task1" />} />
				<Route path="/task1" element={<Task1 />} />
				<Route path="/task2" element={<Task2 />} />
				<Route path="/task3" element={<Task3 />} />
				<Route path="/task4" element={<Task4 />} />
				<Route path="/task5" element={<Task5 />} />
				<Route path="/task6" element={<Task6 />} />
			</Routes>
		</Router>
	);
}

export default App;
