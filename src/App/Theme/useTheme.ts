import { useEffect } from "react";
import { useSelector } from "react-redux";
import { themes, ThemeName } from "./themes";
import { RootState } from "../Redux/store";

export const useTheme = () => {
	const themeName = useSelector((state: RootState) => state.theme.name);

	useEffect(() => {
		const theme = themes[themeName as ThemeName] || themes.light;
		const root = document.documentElement;

		root.style.setProperty("--color-primary", theme.primary);
		root.style.setProperty("--color-secondary", theme.secondary);
		root.style.setProperty("--color-accent", theme.accent);
		root.style.setProperty("--color-background", theme.background);
		root.style.setProperty("--color-surface", theme.surface);
		root.style.setProperty("--color-text", theme.text);
		root.style.setProperty("--color-text-secondary", theme.textSecondary);
		root.style.setProperty("--color-border", theme.border);
		root.style.setProperty("--color-success", theme.success);
		root.style.setProperty("--color-warning", theme.warning);
		root.style.setProperty("--color-error", theme.error);
	}, [themeName]);

	return themeName;
};
