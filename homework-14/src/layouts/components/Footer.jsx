function Footer() {
	const getCurrentYear = () => {
		return new Date().getFullYear();
	};
	return (
		<footer className="p-3 bg-[var(--bg-dark)] text-center">
			<div className="container">
				<p className="text-[var(--text-over-dark)]">© {getCurrentYear()}. Система EMR</p>
			</div>
		</footer>
	);
}

export default Footer;
