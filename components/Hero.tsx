import { ExternalLink, Map as LMap } from "lucide-react";
import { CubemapPanorama } from "./ui/CubemapPanorama";

const cubemapFaces = {
	right: "/panorama/1.png", // 90 degrees (right/left)
	left: "/panorama/2.png", // -90 degrees
	front: "/panorama/0.png", // 0 0 (forward)
	back: "/panorama/3.png", // 180 0 (backward)
	up: "/panorama/top.png", // -90 90 (top)
	down: "/panorama/bottom.png", // -90 -90 (bottom)
};

const links = {
	discord_url: "https://discord.gg/EENxMBaAkz",
	bluemap_url: "https://bluemap.rotaria.online/",
};

export function Hero() {
	return (
		<section
			id="home"
			className="relative w-full py-32 overflow-hidden min-h-screen"
		>
			<CubemapPanorama
				faces={cubemapFaces}
				autoRotate={true}
				rotationSpeed={0.0005}
			/>

			<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-1"></div>

			<div className="parallax-content relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 h-full">
				<div className="text-center max-w-4xl mx-auto">
					<h1 className="minecraft-title text-5xl sm:text-6xl md:text-7xl mb-8 text-white">
						Rotaria SMP
					</h1>

					<p
						className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto font-semibold pixelfy"
						style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
					>
						A relaxed, modded survival world where tech, farms. Claim a spot,
						build weird contraptions, trade with neighbors, and help shape each
						season.
					</p>

					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
						<a
							href={links?.discord_url || "#"}
							target="_blank"
							rel="noopener noreferrer"
							className="minecraft-button-primary inline-flex items-center gap-3"
						>
							<ExternalLink size={24} />
							Join Discord
						</a>
						<a
							href={links?.bluemap_url || "#"}
							target="_blank"
							rel="noopener noreferrer"
							className="minecraft-button-secondary inline-flex items-center gap-3"
						>
							<LMap size={24} />
							World Map
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
