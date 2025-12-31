"use client";

import Link from "next/link";
import Switcher from "./Switcher";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<nav className="flex justify-end items-center px-4 py-2 md:py-4 md:px-8">
			{pathname === "/" ? (
				<Link href="/contact">
					<button className="text-xs sm:text-base md:text-md lg:text-2xl hover:bg-slate-800 hover:text-slate-200 dark:hover:bg-slate-200 dark:hover:text-slate-800 transition-colors duration-100 cursor-pointer border rounded-md p-2 lg:p-4 capitalize mx-4">
						contact me
					</button>
				</Link>
			) : (
				<Link href="/">
					<button className="text-xs sm:text-base md:text-md lg:text-2xl hover:bg-slate-800 hover:text-slate-200 dark:hover:bg-slate-200 dark:hover:text-slate-800 transition-colors duration-100 cursor-pointer border rounded-md p-2 lg:p-4 capitalize mx-4">
						about me
					</button>
				</Link>
			)}

			<Switcher />
		</nav>
	);
};

export default Navbar;
