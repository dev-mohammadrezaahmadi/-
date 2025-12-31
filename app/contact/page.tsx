import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
	return (
		<main className="flex flex-col items-start justify-start">
			<h1 className="text-4xl md:text-6xl lg:text-9xl font-black uppercase bg-gradient-to-r from-blue-400 via-cyan-400 via-purple-400 via-orange-300 to-orange-400 bg-clip-text text-transparent bg-[length:175%] animate-gradient">
				Contact Me
			</h1>
			<div className="flex flex-col gap-4 p-2 mt-8 lg:p-4">
				<a
					href="http://github.com/dev-mohammadrezaahmadi"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-80 transition-opacity"
				>
					<FaGithub className="w-8 h-8 lg:w-16 lg:h-16" />
				</a>
				<a
					href="mailto:dev.mohammadrezaahmadi@gmail.com"
					className="hover:opacity-80 transition-opacity"
				>
					<MdEmail className="w-8 h-8 lg:w-16 lg:h-16" />
				</a>
			</div>
		</main>
	);
}

