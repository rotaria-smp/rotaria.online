import { getPlayerHead } from "@/lib/minecraft";
import { StaffAnimated } from "@/components/ui/StaffAnimated";

type StaffMemberBase = {
	id: string;
	role: string;
};

const STAFF_BASE: StaffMemberBase[] = [
	{
		id: "55374620bd114865a5a4e97cd18849a3", // awiant
		role: "Owner",
	},
	{
		id: "bb2a6b1a56e944adaa7703405c2e427d", // wenia
		role: "Co owner",
	},
	{
		id: "7f984748a523417f978641216e33aa97", // dupe
		role: "Co owner",
	},
	{
		id: "ab4f3227390946888cc476016d72cf7f", // _oan
		role: "Moderator",
	},
	{
		id: "019cfd13994b406795dbce3406dc2358", // britland
		role: "Moderator",
	},
	{
		id: "61d76b2430ff4fe585d86097df0567ad", // rueray
		role: "Moderator",
	},
	{
		id: "1a16f07ca78d4af593587e374a75486c", // worddotexe
		role: "Moderator",
	},
	{
		id: "54641d3d4ce247419feeb88e3f8ceb53", // jag
		role: "Head Developer",
	},
	{
		id: "bebc8ced77dd4e30ac412926656f75dc", // demozo
		role: "Developer",
	},
	{
		id: "14e09e51bfdf4512bfddd6d61638fcae", // MerlinMadHat
		role: "Developer",
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
