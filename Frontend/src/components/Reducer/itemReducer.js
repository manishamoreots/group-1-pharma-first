import { createSlice } from "@reduxjs/toolkit";
import { categoryItems } from "../../Data/CategoryItems";
const initialState = { data: { items: [], description: {}, loading: true } };
export const itemSlice = createSlice({
	name: "item",
	initialState: initialState,
	reducers: {
		getCategoryItem: (state, action) => {
			const filterItem = categoryItems.filter((item) => item.categoryId === action.payload);
			state.data = { ...state.data, items: [...filterItem], loading: false };
		},
		getItemDescription: (state, action) => {
			const filterDescItem = categoryItems.find((item) => item.id === action.payload);
			state.data = { ...state.data, description: { ...filterDescItem }, loading: false };
		},
	},
});
export const { getCategoryItem, getItemDescription } = itemSlice.actions;

//
