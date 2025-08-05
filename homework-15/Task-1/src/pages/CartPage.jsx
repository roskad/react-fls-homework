import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@/features/cart";
import { useState } from "react";

export default function CartPage() {
	const cart = useSelector((s) => s.cart);
	const dispatch = useDispatch();
	const [ordered, setOrdered] = useState(false);

	const handleOrder = () => {
		setOrdered(true);
		setTimeout(() => {
			dispatch(clearCart());
			setOrdered(false);
		}, 2000);
	};

	return (
		<div>
			<h2 className="mb-5 text-xl">Your Cart</h2>
			{cart.length === 0 ? (
				<p>Cart is empty</p>
			) : (
				<div className="space-y-2">
					{cart.map((p) => (
						<div key={p.id} className="flex justify-between">
							<span>
								{p.title} x {p.count}
							</span>
							<span>${p.price * p.count}</span>
						</div>
					))}
					<div className="flex flex-wrap justify-between gap-4">
						<button onClick={handleOrder} className="mt-4 bg-green-600 text-white px-4 py-2">
							Place Order
						</button>
						<button
							onClick={() => {
								dispatch(clearCart());
							}}
							className="mt-4 bg-red-800 text-white px-4 py-2"
						>
							Clear Cart
						</button>
					</div>
				</div>
			)}
			{ordered && <div className="mt-4 p-4  border-green-400 text-white">Order placed successfully!</div>}
		</div>
	);
}
