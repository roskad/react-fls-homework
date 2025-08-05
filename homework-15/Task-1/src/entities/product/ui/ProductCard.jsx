import { Fragment } from "react";

export function ProductCard({ product, actions }) {
	return (
		<div className="flex flex-col h-full rounded-xl p-5 bg-[var(--bg-dark)] shadow hover:shadow-lg transition-shadow duration-200">
			<h3 className="font-bold text-xl mb-2 truncate" title={product.title}>
				{product.title}
			</h3>
			<p className="mb-4 text-gray-600 text-base">
				<span className="font-semibold text-indigo-200">${product.price}</span>
			</p>
			<div className="mt-auto flex gap-2">
				{/* Рендеримо дії, передані через пропси */}
				{actions && actions.map((action, index) => <Fragment key={index}>{action}</Fragment>)}
			</div>
		</div>
	);
}
