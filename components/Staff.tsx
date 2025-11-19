import { PlayerHead } from "@/components/ui/PlayerHead";
import { getPlayerHead } from "@/lib/minecraft";

type StaffMemberBase = {
	id: string;
	role: string;
	icon_type: string;
	description: string;
};

const STAFF_BASE: StaffMemberBase[] = [
	{
		id: "55374620bd114865a5a4e97cd18849a3", // awiant
		role: "Owner",
		icon_type: "crown",
		description: "Handles vision, community tone, and long–term planning.",
	},
	{
		id: "7f984748a523417f978641216e33aa97", // dupe
		role: "Staff",
		icon_type: "wrench",
		description: "Modpack tweaks, performance profiling, backend maintenance.",
	},
	{
		id: "dddbc42f7025495b8beb151200305d5d", // grizzi
		role: "Staff",
		icon_type: "shield",
		description: "Welcomes new players and organizes build collabs.",
	},
	{
		id: "54641d3d4ce247419feeb88e3f8ceb53", // jag
		role: "Developer",
		icon_type: "shield",
		description: "Moderation, events, and support tickets.",
	},
];

export async function Staff() {
	const staffWithHeads = await Promise.all(
		STAFF_BASE.map(async (member) => {
			const res = await getPlayerHead(member.id);

			if (!res) {
				return {
					...member,
					name: "Unknown",
					headUrl: "/default-head.png",
				};
			}

			const { name, playerhead: headUrl } = res;

			return {
				...member,
				name,
				headUrl: headUrl,
			};
		})
	);

	return (
		<section id="staff" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="minecraft-title text-4xl sm:text-5xl mb-4 text-orange-400">
						Our Staff Team
					</h2>
					<p className="text-lg text-gray-200 max-w-3xl mx-auto font-semibold">
						These are the people keeping Rotaria SMP stable, friendly, and moving
						forward.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{staffWithHeads.map((member) => (
						<div
							key={member.id}
							className="minecraft-card text-center hover:border-orange-500 transition-all"
						>
							<div className="flex justify-center mb-4">
								<PlayerHead
									name={member.name}
									url={member.headUrl}
									size={64}
								/>
							</div>
							<h3 className="minecraft-title text-xl mb-2 text-white">
								{member.name}
							</h3>
							<p className="text-orange-400 font-bold mb-2">
								{member.role}
							</p>
							<p className="text-sm text-gray-300 font-semibold">
								{member.description}
							</p>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<div className="minecraft-card inline-block">
						<h3 className="minecraft-title text-2xl mb-3 text-orange-400">
							Want to Help Out?
						</h3>
						<p className="text-gray-200 mb-6 max-w-2xl font-semibold">
							We occasionally open helper. If you like organizing, fixing, or
							welcoming newcomers, keep an eye out.
						</p>
						<a href="#" className="minecraft-button-primary">
							Future Applications
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
