function PaginationBlock({ currentPageNumber, totalPagesNumber, onPageChange }) {
	return (
		<div className="container">
			<div className="flex items-center justify-center gap-2 mt-6">
				{totalPagesNumber > 1 ? (
					<button
						disabled={currentPageNumber === 1}
						onClick={() => onPageChange(currentPageNumber - 1)}
						className={`px-3 py-1 rounded border text-sm font-medium transition-colors
            ${currentPageNumber === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300 text-gray-700 border-gray-300"}
          `}
					>
						Попередня
					</button>
				) : null}
				{Array.from({ length: totalPagesNumber }).map((_, index) => (
					<button
						key={index}
						onClick={() => onPageChange(index + 1)}
						className={`px-3 py-1 rounded border text-sm font-medium transition-colors
            ${index + 1 === currentPageNumber ? "bg-[var(--accent)] text-white" : "bg-white hover:bg-gray-200 text-gray-700 border-gray-300"}
          `}
					>
						{index + 1}
					</button>
				))}
				{totalPagesNumber > 1 ? (
					<button
						disabled={currentPageNumber === totalPagesNumber}
						onClick={() => onPageChange(currentPageNumber + 1)}
						className={`px-3 py-1 rounded border text-sm font-medium transition-colors
            ${currentPageNumber === totalPagesNumber ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300 text-gray-700 border-gray-300"}
          `}
					>
						Наступна
					</button>
				) : null}
			</div>
		</div>
	);
}

export default PaginationBlock;
