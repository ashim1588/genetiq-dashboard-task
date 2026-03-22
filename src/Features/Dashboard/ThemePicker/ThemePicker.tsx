import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, ThemeName } from "@/App/Theme";
import { RootState } from "@/App/Redux/store";
import styles from "./ThemePicker.module.scss";

const ThemePicker = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const currentTheme = useSelector((state: RootState) => state.theme.name);
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const themeList: { name: ThemeName; colors: string[] }[] = [
		{ name: "light", colors: ["#FFFFFF", "#3478F6", "#10B981"] },
		{ name: "dark", colors: ["#111827", "#60A5FA", "#34D399"] },
		{ name: "blue", colors: ["#F0F9FF", "#2563EB", "#06B6D4"] },
		{ name: "green", colors: ["#F0FDF4", "#059669", "#84CC16"] },
		{ name: "purple", colors: ["#FAF5FF", "#7C3AED", "#EC4899"] },
	];

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleThemeChange = (themeName: ThemeName) => {
		dispatch(setTheme(themeName));
		setIsOpen(false);
	};

	const currentThemeData = themeList.find((t) => t.name === currentTheme);

	return (
		<div className={styles["theme-picker"]} ref={dropdownRef}>
			<button
				className={styles["picker-button"]}
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}
				aria-haspopup='listbox'
			>
				<div className={styles["preview-colors"]}>
					{currentThemeData?.colors.map((color, i) => (
						<span
							key={i}
							className={styles["color-dot"]}
							style={{ backgroundColor: color }}
						/>
					))}
				</div>
				<svg
					className={`${styles["chevron"]} ${isOpen ? styles["open"] : ""}`}
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
				>
					<path d='M6 9l6 6 6-6' />
				</svg>
			</button>

			{isOpen && (
				<div className={styles["dropdown"]} role='listbox'>
					<div className={styles["dropdown-header"]}>
						{t("dashboard.theme")}
					</div>
					<div className={styles["theme-grid"]}>
						{themeList.map((theme) => (
							<button
								key={theme.name}
								role='option'
								aria-selected={theme.name === currentTheme}
								className={`${styles["theme-option"]} ${
									theme.name === currentTheme ? styles["selected"] : ""
								}`}
								onClick={() => handleThemeChange(theme.name)}
								title={t(`themes.${theme.name}`)}
							>
								<div className={styles["theme-colors"]}>
									{theme.colors.map((color, i) => (
										<span
											key={i}
											className={styles["theme-color"]}
											style={{ backgroundColor: color }}
										/>
									))}
								</div>
								<span className={styles["theme-name"]}>
									{t(`themes.${theme.name}`)}
								</span>
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ThemePicker;
