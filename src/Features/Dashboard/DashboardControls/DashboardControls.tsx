import { useTranslation } from "react-i18next";
import LanguagePicker from "../LanguagePicker";
import ThemePicker from "../ThemePicker";
import styles from "./DashboardControls.module.scss";

const DashboardControls = () => {
	const { t } = useTranslation();

	return (
		<div className={styles["controls-container"]}>
			<div className={styles["controls-group"]}>
				<span className={styles["label"]}>{t("dashboard.settings")}</span>
				<div className={styles["controls"]}>
					<LanguagePicker />
					<ThemePicker />
				</div>
			</div>
		</div>
	);
};

export default DashboardControls;
