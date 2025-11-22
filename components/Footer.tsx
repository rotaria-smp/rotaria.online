import { Map as LMap, MessageCircle } from "lucide-react";

export function Footer() {
	const links: { discord_url?: string; bluemap_url?: string } | undefined = {
		discord_url: "https://discord.gg/EENxMBaAkz",
		bluemap_url: "https://bluemap.rotaria.online/",
	};

	return (
		<footer className="bg-gray-950 border-t-4 border-gray-900 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					<div>
						<h3 className="minecraft-title text-xl text-orange-400 mb-4">
							Rotaria SMP
						</h3>
						{/* <p className="text-gray-300 font-semibold">
							A cooperative modded survival space—build, trade, automate,
							explore, and help shape the next season.
						</p> */}
					</div>

					<div>
						<h3 className="minecraft-title text-xl text-orange-400 mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#home"
									className="text-gray-300 hover:text-orange-400 transition-colors font-semibold"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#about"
									className="text-gray-300 hover:text-orange-400 transition-colors font-semibold"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#seasons"
									className="text-gray-300 hover:text-orange-400 transition-colors font-semibold"
								>
									Seasons
								</a>
							</li>
							<li>
								<a
									href="#staff"
									className="text-gray-300 hover:text-orange-400 transition-colors font-semibold"
								>
									Staff
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-orange-400 transition-colors font-semibold"
								>
									Rules
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="minecraft-title text-xl text-orange-400 mb-4">
							Connect With Us
						</h3>
						<div className="space-y-3">
							<a
								href={links?.discord_url || "#"}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors font-semibold"
							>
								<MessageCircle size={20} />
								Discord Server
							</a>
							<a
								href={links?.bluemap_url || "#"}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors font-semibold"
							>
								<LMap size={20} />
								World Map
							</a>
							{/* <a
								href="#"
								className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors font-semibold"
							>
								<Code size={20} />
								Wiki / Docs
							</a> */}
						</div>
					</div>
				</div>

				<div className="pt-8 border-t-4 border-gray-900 text-center text-gray-400">
					<p className="font-semibold">
						&copy; {new Date().getFullYear()} Rotaria SMP. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
