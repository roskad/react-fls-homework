function TeacherCard({ teacher, onSelect, isSelected }) {
	return (
		<div className="flex flex-wrap gap-y-2 items-center justify-between py-2 px-4 rounded border border-[var(--text-accent)]">
			<div className="flex gap-4">
				<img src={teacher.photo} alt="photo" className="w-14 rounded-full border border-[var(--text-accent)]" />
				<div>
					<div className="font-bold text-purple-300 text-lg">{teacher.name}</div>
					<div className="text-sm">
						<strong>Предмет:</strong> {teacher.subject}
					</div>
				</div>
			</div>
			{onSelect && (
				<button onClick={() => onSelect(teacher.id)} className={isSelected ? "bg-[var(--accent-hover)]" : undefined}>
					{isSelected ? "Скасувати" : "Вибрати на збори"}
				</button>
			)}
		</div>
	);
}

export default TeacherCard;
