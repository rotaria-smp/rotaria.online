"use client";
import { motion } from "motion/react";
type Season = {
	id: number;
	title: string;
	start: string;
	end?: string;
	description: string;
	status: "active" | "completed";
	features: string[];
	cta?: { label: string; url: string };
};

const mockSeasons: Season[] = [
	{
		id: 2,
		title: "Season 2: The Great Expansion",
		start: "2024-10-01",
		description:
			"We're back with bigger dreams! This season brings enhanced gameplay mechanics, deeper magic systems, and a completely revamped player economy. Join us as we build something truly special together.",
		status: "active",
		features: [
			"Advanced Tech & Magic Integration",
			"Community-Driven Quest Lines",
			"Player Marketplace & Trading",
			"Enhanced World Generation",
		],
	},
	{
		id: 1,
		title: "Season 1: Foundation Era",
		start: "2024-06-01",
		end: "2024-09-25",
		description:
			"Where it all began! Our first season was all about building our community from the ground up, testing what works, and creating the foundation for Rotaria SMP's future.",
		status: "completed",
		features: [
			"Community Building & Bonds",
			"Core Modpack Development",
			"Early Economy Experiments",
			"World Discovery & Mapping",
		],
		cta: { label: "Explore Season 1 Memories", url: "#" },
	},
];

// Animation variants
const seasonsContainer = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.18, delayChildren: 0.1 },
	},
} as const;

const seasonCard = {
	hidden: { opacity: 0, y: 36, scale: 0.96 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { type: "spring", stiffness: 140, damping: 18 },
	},
} as const;

const featureItem = {
	hidden: { opacity: 0, x: -18 },
	show: {
		opacity: 1,
		x: 0,
		transition: { type: "spring", stiffness: 200, damping: 20 },
	},
} as const;

export function Seasons() {
	return (
		<section
			id="seasons"
			className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gray-800"
		>
			<div className="max-w-6xl mx-auto text-center mb-16">
				<h2 className="minecraft-title text-4xl sm:text-5xl md:text-6xl mb-6 text-white">
					Rotaria SMP Seasons
				</h2>
				<p
					className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-semibold"
					style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
				>
					Every season of Rotaria SMP brings new adventures, improved gameplay,
					and stronger community bonds. Here's our journey so far!
				</p>
			</div>

			<motion.div
				className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto"
				variants={seasonsContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
			>
				{mockSeasons.map((season) => {
					const isActive = season.status === "active";
					return (
						<motion.div
							key={season.id}
							variants={seasonCard}
							className="minecraft-card flex flex-col gap-5"
						>
							<div className="flex items-start justify-between gap-4">
								<div>
									<h3 className="minecraft-title text-3xl text-white mb-2">
										{season.title}
									</h3>
									<p className="text-sm font-semibold text-gray-300">
										{season.start}
										{season.end ? ` — ${season.end}` : " — Ongoing"}
									</p>
								</div>
								<span
									className={
										isActive
											? "minecraft-badge minecraft-badge-active"
											: "minecraft-badge minecraft-badge-completed"
									}
								>
									{isActive ? "LIVE NOW" : "COMPLETED"}
								</span>
							</div>

							<p className="text-gray-200 font-medium leading-relaxed">
								{season.description}
							</p>

							<motion.ul
								className="grid grid-cols-1 sm:grid-cols-2 gap-2"
								variants={{
									hidden: {},
									show: { transition: { staggerChildren: 0.08 } },
								}}
							>
								{season.features.map((f) => (
									<motion.li
										key={f}
										variants={featureItem}
										className="flex items-center gap-2 text-sm font-semibold text-orange-300"
									>
										<span className="h-2 w-2 bg-orange-500 inline-block" />
										{f}
									</motion.li>
								))}
							</motion.ul>

							{season.cta && (
								<div className="pt-2">
									<a
										href={season.cta.url}
										className="minecraft-button-secondary inline-flex items-center gap-2"
									>
										{season.cta.label}
									</a>
								</div>
							)}
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
}
