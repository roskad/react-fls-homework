function ProductFilter({ searchValue, handleChange }) {
	return (
		<label className="flex flex-col gap-1 text-sm">
			<input type="text" placeholder="Пошук товару..." value={searchValue} onChange={handleChange} className="w-full border-b border-b-[var(--accent)] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition" />
		</label>
	);
}

export default ProductFilter;
