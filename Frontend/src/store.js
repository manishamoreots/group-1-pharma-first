import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './components/Reducer/authReducer';
import { categorySlice } from './components/Reducer/category';
// import { errorSlice } from './components/Reducer/errorReducer';
export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		category: categorySlice.reducer,
	},
});
