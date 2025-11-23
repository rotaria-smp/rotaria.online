import { getPlayerHead } from "@/lib/minecraft";
import { StaffAnimated } from "@/components/ui/StaffAnimated";

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
		id: "bb2a6b1a56e944adaa7703405c2e427d", // wenia
		role: "Co owner",
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
		description: "Welcomes new players and moderates the server.",
	},
	{
		id: "54641d3d4ce247419feeb88e3f8ceb53", // jag
		role: "Developer",
		icon_type: "shield",
		description: "Bot, mod and software development.",
	},
	{
		id: "754c940300604297be70c84689b54c70", // Q29jYWluYQ
		role: "Developer",
		icon_type: "shield",
		description: "Bot, mod and software development.",
	},
];

type StaffResolved = StaffMemberBase & { name: string; headUrl: string };

export async function Staff() {
	const staffWithHeads: StaffResolved[] = await Promise.all(
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
			return { ...member, name, headUrl };
		}),
	);

	return (
		<section id="staff" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="minecraft-title text-4xl sm:text-5xl mb-4 text-orange-400">
						Our Staff Team
					</h2>
					<p className="text-lg text-gray-200 max-w-3xl mx-auto font-semibold">
						Meet the people who help keep Rotaria SMP stable, friendly, and
						moving forward. Besides our wonderful members.
					</p>
				</div>

				{/* Animated client-side list */}
				<StaffAnimated staff={staffWithHeads} />
			</div>
		</section>
	);
}
