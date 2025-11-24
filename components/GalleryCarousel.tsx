"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
	type CarouselApi,
} from "@/components/ui/carousel";

type Slide = {
	id: number;
	src: string;
	alt: string;
	credit?: string;
};

const SLIDES: Slide[] = [
	{
		id: 1,
		src: "/gallery_images/2025-08-28_05.05.32_grizzi.png",
		alt: "Spawn overview",
		credit: "W_Grizzified",
	},
	{
		id: 6,
		src: "/gallery_images/Screenshot_2025-10-30_135350_oan.png",
		alt: "End island hub",
		credit: "Oan",
	},
	{
		id: 2,
		src: "/gallery_images/2025-09-04_19.32.20-Komputer.png",
		alt: "Community builds",
		credit: "Komputer",
	},
	{
		id: 3,
		src: "/gallery_images/2025-09-21_19.54.26.png",
		alt: "Automation setup",
		credit: "Rotaria player",
	},
	{
		id: 5,
		src: "/gallery_images/Komputer.png",
		alt: "End island hub",
		credit: "Komputer",
	},

	{
		id: 7,
		src: "/gallery_images/Screenshot_2025-10-31_164936_oan.png",
		alt: "End island hub",
		credit: "Oan",
	},
];

const AUTO_SLIDE_DELAY_MS = 6000;
export function GalleryCarousel() {
	const [api, setApi] = useState<CarouselApi | null>(null);
	const [index, setIndex] = useState(0);
	const [playing, setPlaying] = useState(true);

	// Sync selected index
	useEffect(() => {
		if (!api) return;
		const onSelect = () => setIndex(api.selectedScrollSnap());
		api.on("select", onSelect);
		onSelect();
		return () => {
			api?.off("select", onSelect);
		};
	}, [api]);

	// Simple autoplay
	useEffect(() => {
		if (!api || !playing) return;
		const id = setInterval(() => {
			if (!api) return;
			const last = api.slideNodes().length - 1;
			const current = api.selectedScrollSnap();
			api.scrollTo(current === last ? 0 : current + 1);
		}, AUTO_SLIDE_DELAY_MS);
		return () => clearInterval(id);
	}, [api, playing]);

	return (
		<section id="gallery" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="minecraft-title text-4xl sm:text-5xl mb-4 text-orange-400">
						Gallery
					</h2>
					<p className="text-lg text-gray-200 max-w-3xl mx-auto font-semibold">
						Glimpses from the server - builds, automation, exploration and
						community spots.
					</p>
				</div>

				<Carousel
					setApi={setApi}
					className="group max-w-5xl mx-auto"
					opts={{ loop: true, align: "start" }}
				>
					<CarouselContent className="h-[420px] rounded-lg relative">
						{SLIDES.map((slide, i) => (
							<CarouselItem key={slide.src} className="relative h-full">
								<div
									className={`absolute inset-0 transition-opacity duration-700 ${
										i === index ? "opacity-100" : "opacity-0"
									}`}
									aria-hidden={i !== index}
								>
									<Image
										src={slide.src}
										alt={slide.alt}
										fill
										priority={i === index}
										sizes="(max-width: 1280px) 100vw, 1280px"
										className="object-cover"
									/>
									<div className="absolute inset-0 rounded-lg bg-linear-to-t from-black/70 via-black/25 to-transparent pointer-events-none" />
									{slide.credit && (
										<div className="absolute bottom-12 left-12">
											<div className="minecraft-card bg-black/55 backdrop-blur-sm border-orange-600/40 px-4 py-2">
												<p className="text-xs font-semibold text-gray-200 tracking-wide">
													<span className="text-orange-300">
														{slide.credit}
													</span>
												</p>
											</div>
										</div>
									)}
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					{/* <CarouselPrevious className="opacity-0 group-hover:opacity-100 transition-opacity bg-orange-600 text-white border-orange-700 hover:bg-orange-500" />
					<CarouselNext className="opacity-0 group-hover:opacity-100 transition-opacity bg-orange-600 text-white border-orange-700 hover:bg-orange-500" /> */}

					{/* Play / Pause */}
					<button
						type="button"
						onClick={() => setPlaying((p) => !p)}
						aria-label={playing ? "Pause autoplay" : "Play autoplay"}
						className="absolute bottom-8 right-8 minecraft-button-primary px-3 py-2 flex items-center gap-2"
					>
						{playing ? <Pause size={16} /> : <Play size={16} />}
					</button>

					{/* Indicators */}
					<div className="absolute bottom-4 left-4 flex gap-2">
						{SLIDES.map((slide, i) => (
							<button
								key={`dot_${slide.id}`}
								type="button"
								aria-label={`Go to slide ${i + 1}`}
								onClick={() => api?.scrollTo(i)}
								className={`h-3 w-3 rounded-full transition-all ${
									i === index
										? "bg-orange-500 scale-110"
										: "bg-gray-600 hover:bg-gray-500"
								}`}
							/>
						))}
					</div>
				</Carousel>
			</div>
		</section>
	);
}
