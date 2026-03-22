export type ThemeName = "light" | "dark" | "blue" | "green" | "purple";

export interface ThemeColors {
	primary: string;
	secondary: string;
	accent: string;
	background: string;
	surface: string;
	text: string;
	textSecondary: string;
	border: string;
	success: string;
	warning: string;
	error: string;
}

export const themes: Record<ThemeName, ThemeColors> = {
	light: {
		primary: "#3478F6",
		secondary: "#6B7280",
		accent: "#10B981",
		background: "#FFFFFF",
		surface: "#F9FAFB",
		text: "#111827",
		textSecondary: "#6B7280",
		border: "#E5E7EB",
		success: "#10B981",
		warning: "#F59E0B",
		error: "#EF4444",
	},
	dark: {
		primary: "#60A5FA",
		secondary: "#9CA3AF",
		accent: "#34D399",
		background: "#111827",
		surface: "#1F2937",
		text: "#F9FAFB",
		textSecondary: "#9CA3AF",
		border: "#374151",
		success: "#34D399",
		warning: "#FBBF24",
		error: "#F87171",
	},
	blue: {
		primary: "#2563EB",
		secondary: "#3B82F6",
		accent: "#06B6D4",
		background: "#F0F9FF",
		surface: "#E0F2FE",
		text: "#1E3A5F",
		textSecondary: "#64748B",
		border: "#BAE6FD",
		success: "#10B981",
		warning: "#F59E0B",
		error: "#EF4444",
	},
	green: {
		primary: "#059669",
		secondary: "#10B981",
		accent: "#84CC16",
		background: "#F0FDF4",
		surface: "#DCFCE7",
		text: "#14532D",
		textSecondary: "#64748B",
		border: "#BBF7D0",
		success: "#22C55E",
		warning: "#F59E0B",
		error: "#EF4444",
	},
	purple: {
		primary: "#7C3AED",
		secondary: "#8B5CF6",
		accent: "#EC4899",
		background: "#FAF5FF",
		surface: "#F3E8FF",
		text: "#3B0764",
		textSecondary: "#64748B",
		border: "#E9D5FF",
		success: "#10B981",
		warning: "#F59E0B",
		error: "#EF4444",
	},
};
