/* eslint-disable array-callback-return */
import { createSlice, current } from '@reduxjs/toolkit';
import { user } from '../../Data/User';
const initialState = { data: { users: [...user], isAuthenticated: false, errors: {} } };

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		Register: (state, action) => {
			state.data = { users: [...state.data.users, action.payload], errors: {}, isAuthenticated: false };
			console.log(state.data);
		},
		Login: (state, action) => {
			let email = action.payload.email;
			let password = action.payload.password;
			const checkUser = current(state.data.users).find((user) => user.email === email && user.password === password);
			if (checkUser) {
				localStorage.setItem('user', JSON.stringify(checkUser));
				state.data = { ...state.data, isAuthenticated: true };
			} else {
				state.data = { ...state.data, isAuthenticated: false, errors: { msg: 'something Went Wrong' } };
			}
		},
		logout: (state, action) => {
			state.data = { ...state.data, isAuthenticated: false };
			localStorage.removeItem('user');
		},
	},
});

export const { Register, Login, logout } = authSlice.actions;
