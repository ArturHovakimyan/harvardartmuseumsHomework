import { createSlice } from "@reduxjs/toolkit";

export interface IImagesArray {
	imageid: number;
	description: string;
	baseimageurl: string;
}
export interface IInitialState {
	images: IImagesArray[];
}
const initialState = {
	regularElement: {
		images: [],
		description: null,
		primaryimageurl:"",
		imageid:null
	},
};

export const imagesSlice = createSlice({
	name: "image",
	initialState,
	reducers: {
		createImage(state, action) {
			state.regularElement = {...action.payload};
		},
	},
});
export const { createImage } = imagesSlice.actions;

export default imagesSlice.reducer;
