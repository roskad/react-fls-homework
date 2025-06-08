import styles from "./assets/style/task3.module.scss";
import { useState } from "react";
import bear from "./assets/img/bear.png";
import fox from "./assets/img/fox.png";
import hippo from "./assets/img/hippo.png";
import jellyfish from "./assets/img/jellyfish.png";
import tiger from "./assets/img/tiger.png";

function Task3() {
	const questionsList = [
		{
			caption: "ведмідь",
			word: "bear",
			image: bear,
		},
		{
			caption: "лисиця",
			word: "fox",
			image: fox,
		},
		{
			caption: "гіпопотам",
			word: "hippo",
			image: hippo,
		},
		{
			caption: "медуза",
			word: "jellyfish",
			image: jellyfish,
		},
		{
			caption: "тигр",
			word: "tiger",
			image: tiger,
		},
	];

	const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
	const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(questionsList[0]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [feedbackMessage, setFeedbackMessage] = useState("");

	function checkAnswer() {
		const input = document.querySelector("input");
		const userAnswer = input.value.trim().toLowerCase();

		setIsAnswerSubmitted(true);
		setFeedbackMessage("Добре. Молодець!");

		if (userAnswer === currentQuestion.word) {
			setIsAnswerCorrect(true);
			const nextIndex = currentIndex + 1;

			if (nextIndex < questionsList.length) {
				setTimeout(() => {
					setCurrentQuestion(questionsList[nextIndex]);
					setCurrentIndex(nextIndex);
					setIsAnswerSubmitted(false);
					setFeedbackMessage("");
					input.value = "";
				}, 1000);
			} else {
				setTimeout(() => {
					setIsAnswerSubmitted(true);
					setIsAnswerCorrect(true);
					input.value = "";
					setFeedbackMessage("Чудово! Більше питань немає.");
				}, 1000);
			}
		} else {
			setIsAnswerCorrect(false);
			setFeedbackMessage("Невірно, спробуй ще раз.");
		}
	}

	function getAnswerStyle() {
		let style;
		if (isAnswerSubmitted) {
			if (isAnswerCorrect) {
				style = styles["--correct"];
			} else {
				style = styles["--wrong"];
			}
		} else {
			style = "";
		}
		return style;
	}

	return (
		<div className="task">
			<div className="task__text">
				<h1>Задача 3. Елемент тренажера англійської</h1>
				<p>Виводимо зображення елемента і слово. Користувач вводить відповідь.</p>
				<ol>
					<li>якщо вірно – відтворюємо фразу «Добре. Молодець!» (і додаємо зелену рамку до елемента)</li>
					<li>якщо ні – то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).</li>
				</ol>
			</div>
			<div className={`task__container ${styles.task__container}`}>
				<h2>Напиши назву тварини англійською</h2>
				<div className={`${styles.imgContainer} ${getAnswerStyle()}`}>
					<img src={currentQuestion.image} alt={currentQuestion.caption} />
				</div>
				<p>{currentQuestion.caption}</p>
				<input
					type="text"
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							checkAnswer();
						}
					}}
					className={styles.input}
				/>
				{isAnswerSubmitted && <p className={styles.feedback}>{feedbackMessage}</p>}
			</div>
		</div>
	);
}

export default Task3;
