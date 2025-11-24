import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Staff } from "@/components/Staff";
import { ServerStatus } from "@/components/ServerStatus";

export default function Home() {
	return (
		<>
			<Hero />
			<main className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-900">
				<About />
				<div className="max-w-2xl mx-auto mb-6">
					<ServerStatus />
				</div>
				<Staff />
			</main>
		</>
	);
}
