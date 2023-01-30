import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import harvardartmuseumsDataReducer from "slice/harvardartmuseumsData";
import imagesReducer from "slice/imagesSlice";

export const store = configureStore({
	reducer: {
		harvardartmuseumsData: harvardartmuseumsDataReducer,
		images: imagesReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
