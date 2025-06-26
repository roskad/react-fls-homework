function Input({ number, value, onChange }) {
	return (
		<label className="flex gap-2">
			{number}:
			<input type="number" min={0} placeholder={`${number}`} value={value} onChange={onChange} className="w-10 pl-1 border-b border-solid border-gray-400 focus:outline-none focus:border-[var(--accent)]" />
		</label>
	);
}

export default Input;
