import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { data: { locationInfo: {} } };
export const getLocation = createAsyncThunk("location/getLocationData", ({ latitude, longitude }) => {
	return axios
		.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
		.then((res) => res.data)
		.catch((err) => console.log(err));
});

export const commonSlice = createSlice({
	name: "location",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getLocation.pending, (state) => {
			// state.data.loading = true;
		});
		builder.addCase(getLocation.fulfilled, (state, action) => {
			state.data = { locationInfo: { ...action.payload } };
		});
		builder.addCase(getLocation.rejected, (state, action) => {});
	},
});
