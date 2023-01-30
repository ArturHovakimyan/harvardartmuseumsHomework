import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export const initialState = {
	harvardartmuseumsData: {
		info: {},
		records: [],
	},
	status: "idle",
};

export const fetchHarvardartmuseumsApi = createAsyncThunk(
	"harvardartmuseums/fetchHarvardartmuseumsApi",
	async (argURL: string) => {
		const response = await fetch(argURL);
		const harvardartmuseumsApi = await response.json();
		return harvardartmuseumsApi;
	}
);

const harvardartmuseumsSlice = createSlice({
	name: "harvardartmuseums",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchHarvardartmuseumsApi.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchHarvardartmuseumsApi.fulfilled, (state, action) => {
				state.status = "idle";
				state.harvardartmuseumsData = action.payload;
			})
			.addCase(fetchHarvardartmuseumsApi.rejected, (state) => {
				state.status = "failed";
			});
	},
});

export const select = (state: RootState) =>
	state.harvardartmuseumsData.harvardartmuseumsData;
export default harvardartmuseumsSlice.reducer;
