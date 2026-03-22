import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguagePicker.module.scss";

interface Language {
	code: string;
	name: string;
	nativeName: string;
	flag: string;
}

const languages: Language[] = [
	{ code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
	{ code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
	{ code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
	{ code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
	{ code: "zh", name: "Chinese", nativeName: "中文", flag: "🇨🇳" },
	{ code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
];

const LanguagePicker = () => {
	const { i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const currentLanguage =
		languages.find((lang) => lang.code === i18n.language) || languages[0];

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

	const handleLanguageChange = (code: string) => {
		i18n.changeLanguage(code);
		setIsOpen(false);
	};

	return (
		<div className={styles["language-picker"]} ref={dropdownRef}>
			<button
				className={styles["picker-button"]}
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}
				aria-haspopup='listbox'
			>
				<span className={styles["flag"]}>{currentLanguage.flag}</span>
				<span className={styles["code"]}>
					{currentLanguage.code.toUpperCase()}
				</span>
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
				<ul className={styles["dropdown"]} role='listbox'>
					{languages.map((lang) => (
						<li
							key={lang.code}
							role='option'
							aria-selected={lang.code === currentLanguage.code}
							className={`${styles["option"]} ${
								lang.code === currentLanguage.code ? styles["selected"] : ""
							}`}
							onClick={() => handleLanguageChange(lang.code)}
						>
							<span className={styles["flag"]}>{lang.flag}</span>
							<span className={styles["name"]}>{lang.nativeName}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default LanguagePicker;
