// === src/pages/ProductsPage/ui.jsx ===
import { useState, useEffect, useMemo } from "react";
import { useGetProductsQuery } from "@/entities/product"; // Шлях до productApi в entities

// Імпортуємо наш віджет ProductList
import { ProductList } from "@/widgets/ProductListWidget/ProductList";

// Імпортуємо нову кнопку з фічі add-product
import { AddProductButton } from "@/features/product/add-product";

import useFilterProduct from "@/features/product/filter-product/model/useFilterProduct";
import ProductFilter from "@/features/product/filter-product/ui/ProductFilter";

export default function ProductsPage() {
	const [page, setPage] = useState(1);
	const [cursors, setCursors] = useState([]);
	const perPage = 6;

	const { searchValue, handleChange } = useFilterProduct();

	// Логіка запиту даних
	const { data, isLoading } = useGetProductsQuery({ page, perPage, cursors, searchValue });
	const products = data?.data || [];
	const hasMore = data?.hasMore;

	// Логіка для курсорів та зменшення сторінки при порожньому результаті
	useEffect(() => {
		if (data?.cursor && cursors.length < page) {
			setCursors((prev) => [...prev, data.cursor]);
		}
		if (data?.data.length === 0 && page > 1) {
			setPage((p) => p - 1);
		}
	}, [data, cursors?.length, page]);

	return (
		<div className="max-w-7xl mx-auto px-4 py-8">
			<h2 className="text-3xl font-bold mb-5">Products List</h2>
			<div className="flex flex-wrap justify-between gap-4 mb-6">
				<ProductFilter searchValue={searchValue} handleChange={handleChange} />
				{/* Використовуємо кнопку з фічі */}
				<AddProductButton />
			</div>

			<ProductList products={products} page={page} setPage={setPage} hasMore={hasMore} isLoading={isLoading} />
		</div>
	);
}
