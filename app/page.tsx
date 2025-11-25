import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Staff } from "@/components/Staff";
import { GalleryCarousel } from "@/components/GalleryCarousel";

export default function Home() {
	return (
		<>
			<Hero />
			<main className="bg-gray-900">
				<About />
				<GalleryCarousel />
				<Staff />
			</main>
		</>
	);
}
