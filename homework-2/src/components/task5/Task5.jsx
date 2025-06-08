import styles from "./assets/style/task5.module.scss";
import w3ShoolLogo from "./assets/img/W3Schools_logo.svg";
import reactLogo from "./assets/img/react-logo.svg";

function Task5() {
	const searchResults = [
		{
			icon: w3ShoolLogo,
			site: "W3SchoolsUA",
			title: "React Підручник - W3Schools українською",
			url: "https://w3schoolsua.github.io/react/",
			description: "React — це бібліотека JavaScript для створення інтерфейсів користувача. React використовується для створення односторінкових програм...",
		},
		{
			icon: reactLogo,
			site: "React",
			title: "Посібник: знайомство з React",
			url: "https://uk.legacy.reactjs.org/",
			description: "Цей посібник не потребує попереднього ознайомлення з React. У цьому посібнику ми працюватимемо над створенням маленької гри.",
		},
		{
			icon: w3ShoolLogo,
			site: "W3SchoolsUA",
			title: "React Старт - W3Schools українською",
			url: "https://w3schoolsua.github.io/react/start/index.html",
			description: "Підручник React. Старт. React безпосередньо в HTML. Налаштування середовища. Що далі?",
		},
	];

	function ListOutput() {
		return (
			<>
				{searchResults.map((result, index) => (
					<div key={index} className={styles.result}>
						<a href={result.url}>
							<img src={result.icon} alt={`${result.site} icon`} />
							<div>
								<div>{result.site}</div>
								<div>{result.url}</div>
							</div>
						</a>
						<div>
							<a href={result.url}>
								<h3>{result.title}</h3>
							</a>
						</div>
						<div>{result.description}</div>
					</div>
				))}
			</>
		);
	}

	return (
		<div className="task">
			<div className="task__text">
				<h1>Задача 5. Вивід масиву даних</h1>
				<p>Самостійно сформуйте масив даних та виведіть фрагмент на зразок пошукової видачі Гугл.</p>
			</div>
			<div className="task__container">
				<ListOutput />
			</div>
		</div>
	);
}

export default Task5;
