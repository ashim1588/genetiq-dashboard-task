import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import { themeReducer } from "../Theme";

const store = configureStore({
	reducer: {
		category: categoryReducer,
		theme: themeReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
