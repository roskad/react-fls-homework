function LoadingSpinner({ isLoading }) {
	return (
		isLoading && (
			<div className="absolute top-1/2 left-1/2 flex justify-center items-center">
				<div className="w-6 h-6 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin"></div>
			</div>
		)
	);
}

export default LoadingSpinner;
