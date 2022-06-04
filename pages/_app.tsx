import "../styles/globals.css";
import type { AppProps } from "next/app";
import MetaHead from "../components/MetaHead";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div
			className={`${styles.container} transition-colors duration-300 flex flex-col dark:text-slate-200 text-slate-800 min-h-screen min-w-full  dark:bg-slate-900`}
		>
			<MetaHead />
			<Navbar />
			<main className={` py-[5vh] px-[10vw]  flex-grow `}>
				<Component {...pageProps} />
			</main>
			<footer className="p-4 justify-start">
				<span className="text-xs md:text-base">
					{new Date().getFullYear()} © Mohammad Reza Ahmadi
				</span>
			</footer>
		</div>
	);
}

export default MyApp;
