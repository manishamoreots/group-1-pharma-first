import { createSlice } from "@reduxjs/toolkit";
const initialState = { data: { cartItem: [] } };
export const cartSlice = createSlice({
	name: "item",
	initialState: initialState,
	reducers: {
		getCartItems: (state, action) => {},
		addToCart: (state, action) => {
			const user = JSON.parse(localStorage.getItem("user"));
			const cartItems = JSON.parse(localStorage.getItem("cartItem"));
			const userInfo = {
				...action.payload,
				userId: user.userId,
				count: 1,
			};
			if (!cartItems) {
				localStorage.setItem("cartItem", JSON.stringify({ cartItems: { items: [userInfo] } }));
			} else if (cartItems.cartItems.items !== 0) {
				const addedCount = cartItems.cartItems.items.map((item) => {
					if (item.categoryId === action.payload.categoryId) {
						return { ...item, count: item.count + 1 };
					} else {
						return { ...item, userInfo };
					}
				});
				console.log(addedCount);
				// localStorage.setItem("cartItem", JSON.stringify({ cartItems: { items: [...addedCount] } }));
			}
		},
	},
});
export const { getCartItems, addToCart } = cartSlice.actions;

//
