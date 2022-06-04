import type { NextPage } from "next";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "../styles/Home.module.css";

const Contact: NextPage = () => {
	return (
		<main className={`${styles.main}`}>
			<h1
				className={`${styles["text-animate-gradient"]}  text-4xl md:text-6xl lg:text-9xl font-black uppercase`}
			>
				Contact Me
			</h1>
			<div className="flex col gap-4  p-2 mt-8 lg:p-4">
				<a
					href="http://github.com/dev-mohammadrezaahmadi"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub className="w-8 h-8 lg:w-16 lg:h-16" />
				</a>
				<a href="mailto:dev.mohammadrezaahmadi@gmail.com">
					<MdEmail className="w-8 h-8 lg:w-16 lg:h-16" />
				</a>
			</div>
		</main>
	);
};

export default Contact;
