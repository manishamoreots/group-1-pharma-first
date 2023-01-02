import { createSlice } from '@reduxjs/toolkit';

const errorInitialState = { data: {} };
export const errorSlice = createSlice({
	name: 'error',
	initialState: errorInitialState,
	reducers: {
		getError: (state, action) => {
			console.log(action.payload);
		},
	},
});
export const { getError } = errorSlice.actions;
