"use client";

import { motion } from "motion/react";
import { PlayerHead } from "@/components/ui/PlayerHead";

type StaffAnimatedProps = {
	staff: Array<{
		id: string;
		name: string;
		role: string;
		description: string;
		headUrl: string;
	}>;
};

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.05,
		},
	},
} as const;

const cardVariants = {
	hidden: { opacity: 0, y: 32, scale: 0.94 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { type: "spring", stiffness: 140, damping: 18 },
	},
} as const;

export function StaffAnimated({ staff }: StaffAnimatedProps) {
	return (
		<motion.div
			className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
		>
			{staff.map((member) => (
				<motion.div
					key={member.id}
					variants={cardVariants}
					whileHover={{
						scale: 1.04,
						translateY: -4,
					}}
					whileTap={{ scale: 0.98 }}
					className="minecraft-card text-center hover:border-orange-500 transition-colors will-change-transform"
				>
					<div className="flex justify-center mb-4">
						<PlayerHead name={member.name} url={member.headUrl} size={64} />
					</div>
					<h3 className="minecraft-title text-xl mb-2 text-white">
						{member.name}
					</h3>
					<p className="text-orange-400 font-bold mb-2">{member.role}</p>
					<p className="text-sm text-gray-300 font-semibold">
						{member.description}
					</p>
				</motion.div>
			))}
		</motion.div>
	);
}
