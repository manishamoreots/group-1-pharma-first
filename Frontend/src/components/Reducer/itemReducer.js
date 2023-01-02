import { createSlice, current } from "@reduxjs/toolkit";
import { categoryItems } from "../../Data/CategoryItems";
// import { category } from '../../Data/Category';
const initialState = { data: { items: [] } };
export const itemSlice = createSlice({
	name: "item",
	initialState: initialState,
	reducers: {
		getSpecificItem: (state, action) => {
			const filterItem = categoryItems.filter((item) => item.categoryId === action.payload);
			state.data = { items: [...filterItem] };
		},
	},
});
export const { getSpecificItem } = itemSlice.actions;

//
