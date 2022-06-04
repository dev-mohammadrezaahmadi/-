import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<main className={`${styles.main}`}>
			<h1
				className={`${styles["text-animate-gradient"]}  text-4xl md:text-6xl lg:text-9xl font-black uppercase`}
			>
				Mohammad <br /> Reza <br /> Ahmadi
			</h1>
			<div className="flex flex-col gap-4  mt-8">
				<p className="text-md md:text-2xl capitalize">
					<span className="">👋 Hi, </span>
					I&lsquo;m a Software Developer and Providing Solutions mainly focus on{" "}
					<strong className="">Javascript</strong> Ecosystem.
				</p>
			</div>
		</main>
	);
};

export default Home;
