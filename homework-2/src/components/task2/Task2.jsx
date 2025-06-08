import styles from "./assets/style/task2.module.scss";
import business from "./assets/img/business.jpg";
import clouds from "./assets/img/clouds.jpg";
import cognac from "./assets/img/cognac.jpg";
import newspaper from "./assets/img/newspaper.jpg";
import { useState } from "react";

function Task2() {
	const [ticketClass, setTicketClass] = useState("");
	const [selectedDrink, setSelectedDrink] = useState("");
	const [isNewspaperSelected, setIsNewspaperSelected] = useState(false);
	const [wantsSnack, setWantsSnack] = useState(false);

	function handleFormSubmit(e) {
		e.preventDefault();

		let message = `Ви обрали \nКлас: ${ticketClass === "business" ? "Бізнес" : "Економ"}\n\nДодаткові послуги:\n`;

		if (ticketClass === "business") {
			if (!selectedDrink && !isNewspaperSelected) {
				message += `не потрібні`;
			} else {
				if (selectedDrink) {
					message += `Напій: ${selectedDrink && "Коньяк"}\n`;
					message += `Закуска до коньяку: ${wantsSnack ? "Так" : "Ні"}\n`;
				}
				message += `Газета: ${isNewspaperSelected ? "Так" : "Ні"}\n`;
			}
		} else if (ticketClass === "econom") {
			const beer = e.target.elements.beer.value;
			const chips = e.target.elements.chips.value;
			message += `Пиво: ${beer}\nЧипси: ${chips}`;
		}

		alert(message);
	}

	function ContinueBtn() {
		return (
			<button type="submit" className={styles.submitBtn}>
				Продовжити
			</button>
		);
	}

	function BusinesClass() {
		return (
			<div className={styles.businessOptions}>
				<p>Чим займетесь під час польоту?</p>
				<div className={styles.optionsContainer}>
					<label className={styles.option}>
						<input type="checkbox" name="option" checked={selectedDrink === "cognac"} onChange={(e) => setSelectedDrink(e.target.checked ? "cognac" : "")} />
						<img src={cognac} alt="Коньяк" />
					</label>
					<label className={styles.option}>
						<input type="checkbox" name="option" checked={isNewspaperSelected === true} onChange={(e) => setIsNewspaperSelected(e.target.checked ? true : false)} />
						<img src={newspaper} alt="Газета" />
					</label>
				</div>
				{selectedDrink && selectedDrink !== "none" && (
					<div className={styles.snackOptions}>
						<p>Бажаєте закуску до конь'яку?</p>
						<label>
							Так
							<input type="radio" name="snack" value="yes" checked={wantsSnack === true} onChange={() => setWantsSnack(true)} />
						</label>
						<label>
							Ні
							<input type="radio" name="snack" value="no" checked={wantsSnack === false} onChange={() => setWantsSnack(false)} />
						</label>
					</div>
				)}
				<ContinueBtn />
			</div>
		);
	}

	function EconomClass() {
		return (
			<div className={styles.economOptions}>
				<p>Що бажаєте замовити?</p>
				<label>
					Пиво:
					<select name="beer">
						<option value="no-beer">Без пива</option>
						<option value="corona">Corona</option>
						<option value="tuborg">Tuborg</option>
						<option value="lvivske">Львівське</option>
					</select>
				</label>
				<label>
					Чипси:
					<select name="chips">
						<option value="no-chips">Без чипсів</option>
						<option value="crab">Краб</option>
						<option value="cheese">Сир</option>
						<option value="paprika">Паприка</option>
					</select>
				</label>
				<ContinueBtn />
			</div>
		);
	}

	return (
		<div className="task">
			<div className="task__text">
				<h1>Задача 2. Вибір квитка</h1>
				<p>З випадаючого списку вибираємо клас квитка у літаку. Якщо</p>
				<ol>
					<li>бізнес - виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк, то запропонувати закуску (так/ні)), на фоні зображення бізнес кают</li>
					<li>економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.</li>
				</ol>
			</div>
			<div className={`task__container ${styles.task__container}`}>
				<div style={{ backgroundImage: ticketClass === "business" ? `url(${business})` : ticketClass === "econom" ? `url(${clouds})` : "none" }}></div>
				<h2>Оберіть клас квитка:</h2>
				<form className={styles.form} onSubmit={handleFormSubmit}>
					<select
						id="ticketType"
						value={ticketClass}
						onChange={(e) => {
							setTicketClass(e.target.value);
							setSelectedDrink("");
							setWantsSnack(false);
						}}>
						<option value="" disabled>
							Бізнес чи економ?
						</option>
						<option value="business">Бізнес</option>
						<option value="econom">Економ</option>
					</select>
					{ticketClass === "business" && <BusinesClass />}
					{ticketClass === "econom" && <EconomClass />}
				</form>
			</div>
		</div>
	);
}

export default Task2;
