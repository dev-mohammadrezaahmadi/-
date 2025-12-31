"use client";

import { useEffect, useState } from "react";

export default function useDarkSide() {
	const [theme, setTheme] = useState<string>("dark");
	const colorTheme = theme === "dark" ? "light" : "dark";

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(colorTheme);
		root.classList.add(theme);
		localStorage.setItem("theme", theme);
	}, [theme, colorTheme]);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "dark";
		setTheme(savedTheme);
	}, []);

	return [colorTheme, setTheme] as const;
}
