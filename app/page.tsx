import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Staff } from "@/components/Staff";
import { GalleryCarousel } from "@/components/GalleryCarousel";

import { getDailyRandomItems } from "@/lib/utils";

type Slide = {
	id: number;
	src: string;
	alt: string;
	credit?: string;
};
const SLIDES: Slide[] = [
	{
		id: 1,
		src: "/gallery_images/2025-08-28_05.05.32.png",
		alt: "Minecraft player sitting on a couch in a minecraft shop",
		credit: "W_Grizzified",
	},
	{
		id: 2,
		src: "/gallery_images/2025-09-04_19.32.20.png",
		alt: "Minecraft train built with the mod crate",
		credit: "mrmansiscool",
	},
	{
		id: 3,
		src: "/gallery_images/2025-11-18_02.36.55.png",
		alt: "Minecraft player fishing at the harbor",
		credit: "Atef",
	},
	{
		id: 4,
		src: "/gallery_images/image.png",
		alt: "A minecraft train service station including a train built with the crate mode",
		credit: "mrmansiscool",
	},
	{
		id: 5,
		src: "/gallery_images/Screenshot_2025-10-30_135350.png",
		alt: "A build over large mushrooms in Minecraft",
		credit: "Oan",
	},
	{
		id: 6,
		src: "/gallery_images/2025-09-21_19.54.26.png",
		alt: "A minecraft build over a wedding vennue with cherry blossom style",
		credit: "Rotaria player",
	},

	{
		id: 7,
		src: "/gallery_images/Screenshot_2025-10-31_164936.png",
		alt: "Minecraft player standing in front of an enchantment table",
		credit: "Oan",
	},
];

const random_slides = getDailyRandomItems(SLIDES, SLIDES.length);

export default function Home() {
	return (
		<>
			<Hero />
			<main className="bg-gray-900">
				<About />
				<GalleryCarousel slides={random_slides} />
				<Staff />
			</main>
		</>
	);
}
