import { createSlice } from "@reduxjs/toolkit";


export interface IImagesArray {
	imageid: number;
	description: string;
	baseimageurl: string;
}
export interface IInitialState {
	images: IImagesArray[];
}
const initialState: IInitialState = {
	images: [],
};

export const imagesSlice = createSlice({
	name: "image",
	initialState,
	reducers: {
		createImage(state, action) {
			state.images = action.payload;
		},
	},
});
export const { createImage } = imagesSlice.actions;

export default imagesSlice.reducer;
