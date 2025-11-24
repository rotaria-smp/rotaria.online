import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Staff } from "@/components/Staff";
import { GalleryCarousel } from "@/components/GalleryCarousel";

export default function Home() {
	return (
		<>
			<Hero />
			<main className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-900">
				<About />
				<GalleryCarousel />
				<Staff />
			</main>
		</>
	);
}
