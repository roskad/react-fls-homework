import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserIcon } from "@hugeicons/core-free-icons";
import { LockPasswordIcon } from "@hugeicons/core-free-icons";
import styles from "./assets/style/task1.module.scss";

function Task1() {
	const [output, setOutput] = useState(null);

	const user = {
		name: "Ivan",
		pass: "111",
	};

	function handleFormSend(e) {
		e.preventDefault();
		const loginInput = document.querySelector("#userName");
		const passInput = document.querySelector("#userPass");
		const isAdmin = loginInput.value == user.name && passInput.value == user.pass;

		if (isAdmin) {
			showSucces(isAdmin);
		} else {
			showError(isAdmin);
		}
	}

	function showSucces(isAdmin) {
		setOutput(
			<>
				<h2>Вітаю, Іван!</h2>
				<p>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM7.54964 14.4003C7.88084 14.1516 8.35099 14.2184 8.59974 14.5496C9.37631 15.5836 10.6103 16.25 12 16.25C13.3898 16.25 14.6238 15.5836 15.4003 14.5496C15.6491 14.2184 16.1192 14.1516 16.4505 14.4003C16.7817 14.6491 16.8485 15.1192 16.5997 15.4505C15.5521 16.8454 13.8816 17.75 12 17.75C10.1185 17.75 8.44802 16.8454 7.40035 15.4505C7.1516 15.1192 7.21843 14.6491 7.54964 14.4003ZM8 7.75C7.30964 7.75 6.75 8.30964 6.75 9C6.75 9.69036 7.30964 10.25 8 10.25H8.00897C8.69933 10.25 9.25897 9.69036 9.25897 9C9.25897 8.30964 8.69933 7.75 8.00897 7.75H8ZM15.991 7.75C15.3007 7.75 14.741 8.30964 14.741 9C14.741 9.69036 15.3007 10.25 15.991 10.25H16C16.6904 10.25 17.25 9.69036 17.25 9C17.25 8.30964 16.6904 7.75 16 7.75H15.991Z"
							fill={isAdmin && "yellow"}></path>
					</svg>
				</p>
			</>
		);
	}

	function showError(isAdmin) {
		setOutput(
			<>
				<h2>Ти хто такий?</h2>
				<p>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.02203 10.8254C7.63262 10.7513 7.25934 10.75 7 10.75C6.58579 10.75 6.25 10.4142 6.25 10C6.25 9.58579 6.58579 9.25 7 9.25L7.00986 9.25H7.00987C7.27248 9.24998 7.76673 9.24995 8.30233 9.35183C8.83946 9.45401 9.49185 9.6715 10.014 10.1628C10.136 10.2776 10.3015 10.4452 10.4412 10.6415C10.567 10.8182 10.75 11.1245 10.75 11.5C10.75 12.1904 10.1904 12.75 9.5 12.75C8.76609 12.75 8.2399 12.142 8.25009 11.4883C8.25352 11.2687 8.31923 11.0769 8.39791 10.9225C8.28024 10.8827 8.15432 10.8506 8.02203 10.8254ZM16.9901 9.25L17 9.25C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75C16.7407 10.75 16.3674 10.7513 15.978 10.8254C15.8457 10.8506 15.7198 10.8827 15.6021 10.9225C15.6808 11.0769 15.7465 11.2687 15.7499 11.4883C15.7601 12.142 15.2339 12.75 14.5 12.75C13.8096 12.75 13.25 12.1904 13.25 11.5C13.25 11.1245 13.433 10.8182 13.5588 10.6415C13.6985 10.4452 13.864 10.2776 13.986 10.1628C14.5082 9.6715 15.1605 9.45401 15.6977 9.35183C16.2333 9.24995 16.7275 9.24998 16.9901 9.25H16.9901ZM8.59973 17.4504C9.37631 16.4165 10.6102 15.75 12 15.75C13.3898 15.75 14.6238 16.4165 15.4004 17.4504C15.6491 17.7816 16.1193 17.8484 16.4505 17.5997C16.7817 17.3509 16.8485 16.8808 16.5997 16.5496C15.5521 15.1547 13.8816 14.25 12 14.25C10.1184 14.25 8.44801 15.1547 7.40036 16.5496C7.1516 16.8808 7.21843 17.3509 7.54963 17.5997C7.88082 17.8484 8.35097 17.7816 8.59973 17.4504Z"
							fill={!isAdmin && "red"}></path>
					</svg>
				</p>
			</>
		);
	}

	return (
		<div className="task">
			<div className="task__text">
				<h1>Задача 1. Перевірка юзера</h1>
				<p>
					Вводимо логін і пароль
					<span title="111" style={{ cursor: "help" }}>
						ℹ️
					</span>
					. Якщо логін вірний відображаємо смайл. Якщо ні, то:
				</p>
				<ol>
					<li>якщо логін = Ivan – колір повідомлення жовтий</li>
					<li>якщо хтось інший, то колір повідомлення червоний</li>
				</ol>
			</div>
			<div className={`task__container ${styles.task__container}`}>
				<form className={`task__form ${styles.form}`} onSubmit={handleFormSend}>
					<div className={`${styles.form__item} ${styles["--required"]}`}>
						<span className={styles.form__icon}>
							<HugeiconsIcon icon={UserIcon} />
						</span>
						<input autoComplete="off" type="text" id="userName" name="userName" maxLength="45" placeholder="Логін" className={styles.form__input} required />
						<label htmlFor="userName" className={styles.form__label}>
							Логін
						</label>
					</div>
					<div className={`${styles.form__item} ${styles["--required"]}`}>
						<span className={styles.form__icon}>
							<HugeiconsIcon icon={LockPasswordIcon} />
						</span>
						<input autoComplete="off" type="password" id="userPass" name="userPass" maxLength="45" placeholder="Пароль" className={styles.form__input} required />
						<label htmlFor="userPass" className={styles.form__label}>
							Пароль
						</label>
					</div>
					<div className={`${styles.form__item} ${styles["--no-padding"]}`}>
						<button type="submit" className="form__submit-btn">
							Вхід
						</button>
					</div>
				</form>
				{output && <div className={styles.task__output}>{output}</div>}
			</div>
		</div>
	);
}

export default Task1;
