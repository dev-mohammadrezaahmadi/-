import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
	title: "Mohammad Reza Ahmadi",
	description: "Personal Website",
	author: "Mohammad Reza Ahmadi",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="transition-colors duration-300 flex flex-col dark:text-slate-200 text-slate-800 min-h-screen min-w-full dark:bg-slate-900 bg-white">
				<Navbar />
				<main className="py-[5vh] px-[10vw] flex-grow">
					{children}
				</main>
				<footer className="p-4 justify-start">
					<span className="text-xs md:text-base">
						{new Date().getFullYear()} © Mohammad Reza Ahmadi
					</span>
				</footer>
			</body>
		</html>
	);
}


