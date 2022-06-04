import { useState } from "react";
import useDarkSide from "../hooks/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";
export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (checked: boolean) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};
	return (
		<DarkModeSwitch
			onChange={toggleDarkMode}
			checked={darkSide}
			className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"
		/>
	);
}
