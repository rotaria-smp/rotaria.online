"use client";
import { motion } from "motion/react";
import { Wifi, AlertTriangle, Users } from "lucide-react";
import type { McStatusResponse } from "@/lib/minecraft";

const cardVariants = {
	hidden: { opacity: 0, y: 32, scale: 0.94 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { type: "spring", stiffness: 140, damping: 18 },
	},
} as const;

export function ServerStatus({ data }: { data: McStatusResponse }) {
	const isOnline = data?.online;
	const onlinePlayers = data.players?.online ?? 0;
	const maxPlayers = data.players?.max ?? 0;

	return (
		<motion.div
			variants={cardVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className={`minecraft-card flex flex-col gap-2 md:gap-4 ${isOnline ? "border-orange-500/60" : "border-red-700/60"}`}
		>
			<div className="flex items-center justify-between">
				<h3 className="minecraft-title text-xl text-white m-0">
					Server Status
				</h3>
				{isOnline ? (
					<span className="minecraft-badge minecraft-badge-active flex items-center gap-1 animate-pulse">
						<Wifi size={16} /> Online
					</span>
				) : (
					<span className="minecraft-badge minecraft-badge-completed flex items-center gap-1 bg-red-700 border-red-900 text-white">
						<AlertTriangle size={16} /> Offline
					</span>
				)}
			</div>

			<div className="grid grid-cols-2 gap-px md:gap-4">
				<div className="flex flex-col">
					<span className="text-xs font-bold uppercase tracking-wide text-gray-400">
						Players
					</span>
					<div className="flex items-center gap-2 text-gray-200 font-semibold">
						<Users size={16} className="text-orange-400" />
						{isOnline ? (
							<span>
								{onlinePlayers}
								{" / "}
								{maxPlayers || "?"}
							</span>
						) : (
							<span>0 / 0</span>
						)}
					</div>
				</div>
				<div className="flex flex-col">
					<span className="text-xs font-bold uppercase tracking-wide text-gray-400">
						Address
					</span>
					<span className="text-gray-200 font-semibold">
						<code className="px-0.5 md:px-1 py-0.5 rounded bg-gray-700 text-white font-mono text-sm">
							mc.rotaria.online
						</code>
					</span>
				</div>
			</div>

			{!isOnline && (
				<p className="text-xs text-gray-400 font-semibold">
					Server seems to be offline at the moment.
				</p>
			)}
		</motion.div>
	);
}
