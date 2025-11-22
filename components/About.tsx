"use client";
import { motion } from "motion/react";
import { Zap, Users, Globe, Shield } from "lucide-react";

export function About() {
	const features = [
		{
			icon: Zap,
			title: "Balanced Modpack",
			description:
				"A curated mix of exploration, tech, and QoL mods—no bloat, just fun.",
		},
		{
			icon: Users,
			title: "Welcoming Players",
			description:
				"You’ll find people chatting, building towns, helping newcomers, and sharing resources.",
		},
		{
			icon: Globe,
			title: "Stable Performance",
			description:
				"Optimized configs and hardware keep TPS healthy even when automation kicks in.",
		},
		{
			icon: Shield,
			title: "Fair & Safe Play",
			description:
				"Clear rules, and active moderation so you can build without worry.",
		},
	];

	// Animation variants
	const containerVariants = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.05,
			},
		},
	} as const;

	const cardVariants = {
		hidden: { opacity: 0, y: 100, scale: 0.95 },
		show: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { type: "spring", stiffness: 40, damping: 16 },
		},
	} as const;

	return (
		<section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="minecraft-title text-4xl sm:text-5xl mb-4 text-orange-400">
						About Rotaria SMP
					</h2>
					<p className="text-lg text-gray-200 max-w-3xl mx-auto font-semibold">
						Rotaria SMP is a community-driven modded survival server. We focus
						on collaborative play, seasonal progression, and keeping things
						approachable for casual and veteran players alike.
					</p>
				</div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.2 }}
				>
					{features.map((feature) => {
						const Icon = feature.icon;
						return (
							<motion.div
								key={feature.title}
								variants={cardVariants}
								className="minecraft-card will-change-transform hover:border-orange-500 transition-colors"
							>
								<div className="flex items-start gap-4">
									<div
										className="p-3 bg-orange-600 shrink-0"
										style={{
											boxShadow:
												"inset -2px -2px 0 rgba(0,0,0,0.3), inset 2px 2px 0 rgba(255,255,255,0.2)",
										}}
									>
										<Icon className="text-white" size={28} />
									</div>
									<div>
										<h3 className="text-xl font-bold mb-2 minecraft-title">
											{feature.title}
										</h3>
										<p className="text-gray-300 font-semibold">
											{feature.description}
										</p>
									</div>
								</div>
							</motion.div>
						);
					})}
				</motion.div>

				{/* <div className="minecraft-card border-orange-500/50">
					<h3 className="minecraft-title text-2xl mb-6 text-orange-400">
						Server Information
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="flex items-center gap-2">
							<span className="font-bold text-orange-400 text-lg">
								Version:
							</span>
							<span className="text-gray-200 font-semibold text-lg">
								1.21.1
							</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="font-bold text-orange-400 text-lg">
								Mod Loader:
							</span>
							<span className="text-gray-200 font-semibold text-lg">
								neoforge
							</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="font-bold text-orange-400 text-lg">
								Players:
							</span>
							<span className="text-gray-200 font-semibold text-lg">
								24 Slot Cap
							</span>
						</div>

					</div>
				</div> */}
			</div>
		</section>
	);
}
