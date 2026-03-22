import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeName } from "./themes";

interface ThemeState {
	name: ThemeName;
}

const getInitialTheme = (): ThemeName => {
	if (typeof window !== "undefined") {
		const saved = localStorage.getItem("theme");
		if (saved && ["light", "dark", "blue", "green", "purple"].includes(saved)) {
			return saved as ThemeName;
		}
	}
	return "light";
};

const initialState: ThemeState = {
	name: getInitialTheme(),
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<ThemeName>) => {
			state.name = action.payload;
			localStorage.setItem("theme", action.payload);
		},
	},
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
