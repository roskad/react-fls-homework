import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import apiRoutes from "../../api/apiRoutes";
import frontRoutes from "../../routes/frontRoutes";

function ProductDetails() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchData() {
			const res = await fetch(apiRoutes.getProductById(id));
			const data = await res.json();

			if (data) setProduct(data);
			else navigate(frontRoutes.navigate.products.list);
		}
		fetchData();
	}, [id]);

	if (!product) return <p>Завантаження...</p>;

	return (
		<div>
			<h2>{product.name}</h2>
			<img src={product.imageUrl} alt={product.name} style={{ width: "200px" }} />
			<p>Ціна: {product.price} грн</p>
		</div>
	);
}

export default ProductDetails;
