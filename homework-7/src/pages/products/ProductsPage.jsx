import { useEffect, useState } from "react";
import { Link } from "react-router";
import apiRoutes from "../../api/apiRoutes";
import frontRoutes from "../../routes/frontRoutes";

function ProductPage() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function fetchData() {
			try {
				setIsLoading(true);
				const res = await fetch(apiRoutes.productsList);
				const data = await res.json();
				setProducts(data);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		}
		fetchData();
	}, []);

	if (isLoading) return <div>Завантаження ... </div>;
	if (error) return <div>Помилка завантаження </div>;
	return (
		<div>
			<ul>
				{products.map((prod) => (
					<li key={prod.id}>
						<Link to={frontRoutes.navigate.products.getDetailLink(prod.id)}>{prod.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ProductPage;
