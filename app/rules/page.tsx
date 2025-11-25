import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Server Rules",
	description: "Rotaria SMP server and chat rules",
	alternates: { canonical: "https://www.rotaria.online/rules" },
};

export default function RulesPage() {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
			<div className="max-w-5xl mx-auto">
				<h1 className="minecraft-title text-4xl sm:text-5xl mb-8 text-orange-400">
					Server Rules
				</h1>
				<p className="text-gray-300 font-semibold mb-10">
					Read and follow all rules. Ignorance is not an excuse. Infractions may
					result in warnings, rollbacks, or bans.
				</p>

				{/* SMP RULES */}
				<div className="minecraft-card mb-12">
					<h2 className="minecraft-title text-2xl mb-4 text-white">
						1. SMP Rules
					</h2>
					<ol className="space-y-6 list-decimal list-inside text-gray-200 font-semibold">
						<li>
							<span className="font-bold text-orange-400">
								1.1 Griefing & Theft
							</span>
							<div className="mt-1 text-sm leading-relaxed">
								No stealing or destroying property you do not own. Do not alter
								others’ filters, train schedules, station names, or automation
								setups.
							</div>
						</li>
						<li>
							<span className="font-bold text-orange-400">
								1.2 Combat Restrictions
							</span>
							<div className="mt-1 text-sm leading-relaxed">
								PvP only with mutual agreement. No crystals, TNT minecarts, or
								other explosives in PvP.
							</div>
						</li>
						<li>
							<span className="font-bold text-orange-400">1.3 Exploits</span>
							<div className="mt-1 text-sm leading-relaxed">
								Glitches, exploits, dupes, or unintended game/mechanics abuse
								for advantage are prohibited.
							</div>
						</li>
						<li>
							<span className="font-bold text-orange-400">
								1.4 Game Modifications
							</span>
							<div className="mt-1 text-sm leading-relaxed">
								No cheat clients or advantage mods (X-Ray, ESP, Baritone, etc.).
								Allowed: Fullbright, Freecam (non-intrusive).
							</div>
						</li>
						<li>
							<span className="font-bold text-orange-400">
								1.5 Lag Machines
							</span>
							<div className="mt-1 text-sm leading-relaxed">
								Intentional lag machines forbidden. Optimize large Create or
								automation builds; staff may request changes.
							</div>
						</li>
						<li>
							<span className="font-bold text-orange-400">
								1.6 Age Requirement
							</span>
							<div className="mt-1 text-sm leading-relaxed">
								Minimum age: 16+.
							</div>
						</li>
						<li>
							<span className="font-bold text-orange-400">1.7 Land Claims</span>
							<div className="mt-1 text-sm leading-relaxed">
								Clearly mark claim boundaries (fences, signs). Avoid crowding
								others—maintain respectful spacing.
							</div>
						</li>
						<li>
							<span className="font-bold text-orange-400">
								1.8 End Dimension Claims
							</span>
							<div className="mt-1 text-sm leading-relaxed">
								Any outer End island may be claimed if not already taken.
								Main/Spawn End island cannot be claimed.
							</div>
						</li>
						<li>
							<span className="font-bold text-orange-400">1.9 Trespassing</span>
							<div className="mt-1 text-sm leading-relaxed">
								Do not enter areas marked private (signs, decals, or explicit
								chat). Owners/residents may engage in defensive combat without
								prior agreement.
							</div>
						</li>
						<li>
							<span className="font-bold text-orange-400">
								2.0 Spawn / Starter Area Plots
							</span>
							<div className="mt-1 text-sm leading-relaxed">
								Purchased plots follow standard land claim rules.
							</div>
						</li>
						<li>
							<span className="font-bold text-orange-400">
								2.1 Farms in Shopping Area
							</span>
							<div className="mt-1 text-sm leading-relaxed">
								No active farms in shopping district to reduce lag.
							</div>
						</li>
						<li>
							<span className="font-bold text-orange-400">
								2.2 Plot Trading
							</span>
							<div className="mt-1 text-sm leading-relaxed">
								Players may resell or hold plots for profit—no scamming or
								deceptive listings.
							</div>
						</li>
					</ol>
				</div>

				{/* CHAT RULES */}
				<div className="minecraft-card mb-12">
					<h2 className="minecraft-title text-2xl mb-4 text-white">
						Chat Rules
					</h2>
					<ul className="space-y-5 text-gray-200 font-semibold">
						<li>
							<span className="font-bold text-orange-400">
								No Racism or Discrimination
							</span>
							<div className="mt-1 text-sm leading-relaxed">
								Any racist, discriminatory, or derogatory content is strictly
								forbidden.
							</div>
						</li>
						<li>
							<span className="font-bold text-orange-400">No Hate Speech</span>
							<div className="mt-1 text-sm leading-relaxed">
								No slurs, targeted harassment, personal attacks, threats, or
								promotion of hateful ideologies.
							</div>
						</li>
						<li>
							<span className="font-bold text-orange-400">No NSFW</span>
							<div className="mt-1 text-sm leading-relaxed">
								Keep all chat, voice, and shared media family-friendly. No
								explicit or suggestive content.
							</div>
						</li>
					</ul>
				</div>

				<div className="minecraft-card bg-gray-800/70 border-orange-600/40">
					<h2 className="minecraft-title text-xl mb-3 text-orange-400">
						Enforcement & Appeals
					</h2>
					<p className="text-sm text-gray-300 font-semibold leading-relaxed">
						Staff decisions are final. For clarification or fair appeal, contact
						staff privately via Discord. Repeated or severe violations escalate
						quickly.
					</p>
				</div>
			</div>
		</section>
	);
}
