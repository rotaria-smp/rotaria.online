import { Zap, Users, Globe, Shield } from "lucide-react";
import { ServerStatus } from "@/components/ServerStatus";
import { fetchStatus } from "@/lib/minecraft";

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

export async function About() {
	const serverData = await fetchStatus();

	return (
		<section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-14">
					<h2 className="minecraft-title text-4xl sm:text-5xl mb-4 text-orange-400">
						About Rotaria SMP
					</h2>
					<p className="text-lg text-gray-200 max-w-3xl mx-auto font-semibold">
						Rotaria SMP is a community-driven Create–focused modded survival
						server (200+ curated mods) with seasonal progression, automation
						megaprojects, balanced progression systems, and fair play—built to
						be accessible to newcomers to modded Minecraft while still deep
						enough for veteran players.
					</p>
				</div>
				<div className="max-w-2xl mx-auto">
					<ServerStatus data={serverData} />
				</div>
			</div>
		</section>
	);
}
