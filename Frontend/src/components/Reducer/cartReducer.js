import { createSlice } from "@reduxjs/toolkit";
const initialState = { data: { cartItem: [] } };
export const cartSlice = createSlice({
	name: "item",
	initialState: initialState,
	reducers: {
		getCartItems: (state, action) => {},
		addToCart: (state, action) => {
			const user = JSON.parse(localStorage.getItem("user"));
			const items = JSON.parse(localStorage.getItem("cartItem"));
			if (user) {
				localStorage.setItem(
					"cartItem",
					JSON.stringify({ userId: user.userId, cartItems: { items: [action.payload], count: 0 } })
				);
			} else {
				if (items.cartItems.length !== 0) {
					localStorage.setItem(
						"cartItem",
						JSON.stringify({ userId: user.userId, cartItems: [...items.items, action.payload] })
					);
				}
			}
		},
	},
});
export const { getCartItems, addToCart } = cartSlice.actions;

//
