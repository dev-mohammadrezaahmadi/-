export default function Home() {
	return (
		<main className="flex flex-col items-start justify-start">
			<h1 className="text-4xl md:text-6xl lg:text-9xl font-black uppercase bg-gradient-to-r from-blue-400 via-cyan-400 via-purple-400 via-orange-300 to-orange-400 bg-clip-text text-transparent bg-[length:175%] animate-gradient">
				Mohammad <br /> Reza <br /> Ahmadi
			</h1>
			<div className="flex flex-col gap-4 mt-8">
				<p className="text-md md:text-2xl capitalize">
					<span>👋 Hi, </span>
					I&apos;m a Software Developer and Providing Solutions mainly focus on{" "}
					<strong className="font-semibold">Javascript</strong> Ecosystem.
				</p>
			</div>
		</main>
	);
}

