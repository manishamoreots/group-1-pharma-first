import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./components/Reducer/authReducer";
import { categorySlice } from "./components/Reducer/categoryReducer";
import { itemSlice } from "./components/Reducer/itemReducer";
import { commonSlice } from "./components/Reducer/commonReducer";
import { cartSlice } from "./components/Reducer/cartReducer";
// import { errorSlice } from './components/Reducer/errorReducer';
export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		category: categorySlice.reducer,
		items: itemSlice.reducer,
		common: commonSlice.reducer,
		cart: cartSlice.reducer,
	},
});
