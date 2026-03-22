import { RouterProvider } from "react-router-dom";
import "./Styles/Global.scss";
import Router from "./Routes/Router";
import "./I18n/i18n";
import { useTheme } from "./Theme";

function App() {
	useTheme();

	return <RouterProvider router={Router} />;
}

export default App;
