import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
// import { Seasons } from "@/components/Seasons";
import { Staff } from "@/components/Staff";

export default function Home() {
	return (
		<>
			<Hero />
			<main>
				<About />
				<Staff />
			</main>
			{/* <main>
				<Seasons />
				</main> */}
		</>
	);
}
