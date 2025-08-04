function ErrorMessage({ error }) {
	return (
		error && (
			<div className="max-w-96 mx-auto my-8 p-4 text-center rounded bg-[var(--bg-dark)]">
				<p>От халепа! Щось пішло не так.</p>
				<p>Спробуйте ще раз...</p>
			</div>
		)
	);
}

export default ErrorMessage;
