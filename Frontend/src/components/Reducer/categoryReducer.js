import { createSlice, current } from "@reduxjs/toolkit";
import { category } from "../../Data/Category";
const initialState = { data: { categories: [...category] } };
export const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    getCategory: (state, action) => {
      state.data = { categories: current(state.data.categories) };
    },
  },
});
export const { getCategory } = categorySlice.actions;
