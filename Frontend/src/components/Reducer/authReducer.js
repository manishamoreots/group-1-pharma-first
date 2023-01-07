/* eslint-disable array-callback-return */
import { createSlice, current } from "@reduxjs/toolkit";
import { user } from "../../Data/User";
const initialState = { data: { users: [...user], isAuthenticated: false, errors: {}, loading: false } };

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		Register: (state, action) => {
			let email = action.payload.email.trim();
			const data = current(state.data.users).find((user) => user.email === email);
			if (data) {
				state.data = { ...current(state.data), errors: { message: "User Already Exists!!" } };
			} else {
				state.data = { users: [...state.data.users, action.payload], errors: {}, isAuthenticated: false, loading: true };
			}
		},
		Login: (state, action) => {
			let email = action.payload.email.trim();
			let password = action.payload.password.trim();
			const checkUser = current(state.data.users).find((user) => user.email === email && user.password === password);
			if (checkUser) {
				localStorage.setItem("user", JSON.stringify(checkUser));
				state.data = { ...state.data, isAuthenticated: true, loading: true };
			} else {
				state.data = { ...state.data, isAuthenticated: false, errors: { msg: "Email or password incorrect" }, loading: false };
			}
		},
		logout: (state, action) => {
			state.data = { ...state.data, isAuthenticated: false };
			localStorage.removeItem("user");
		},
	},
});

export const { Register, Login, logout } = authSlice.actions;
