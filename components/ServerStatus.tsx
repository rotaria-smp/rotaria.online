import { Wifi, AlertTriangle, Users } from "lucide-react";

type McStatusResponse = {
	online: boolean;
	players?: {
		online?: number;
		max?: number;
	};
};

async function fetchStatus(): Promise<McStatusResponse> {
	try {
		const res = await fetch(
			"https://api.mcstatus.io/v2/status/java/mc.rotaria.online",
			{
				// Revalidate every 60s
				next: { revalidate: 60 },
			},
		);
		if (!res.ok) {
			return { online: false };
		}
		return (await res.json()) as McStatusResponse;
	} catch {
		return { online: false };
	}
}

export async function ServerStatus() {
	const data = await fetchStatus();
	const isOnline = data.online;
	const onlinePlayers = data.players?.online ?? 0;
	const maxPlayers = data.players?.max ?? 0;

	return (
		<div
			className={`minecraft-card flex flex-col gap-4 ${isOnline ? "border-orange-500/60" : "border-red-700/60"}`}
		>
			<div className="flex items-center justify-between">
				<h3 className="minecraft-title text-xl text-white m-0">
					Server Status
				</h3>
				{isOnline ? (
					<span className="minecraft-badge minecraft-badge-active flex items-center gap-1">
						<Wifi size={16} /> Online
					</span>
				) : (
					<span className="minecraft-badge minecraft-badge-completed flex items-center gap-1 bg-red-700 border-red-900 text-white">
						<AlertTriangle size={16} /> Offline
					</span>
				)}
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div className="flex flex-col">
					<span className="text-xs font-bold uppercase tracking-wide text-gray-400">
						Players
					</span>
					<div className="flex items-center gap-2 text-gray-200 font-semibold">
						<Users size={16} className="text-orange-400" />
						{isOnline ? (
							<span>
								{onlinePlayers}/{maxPlayers || "?"}
							</span>
						) : (
							<span>0/0</span>
						)}
					</div>
				</div>
				<div className="flex flex-col">
					<span className="text-xs font-bold uppercase tracking-wide text-gray-400">
						Address
					</span>
					<span className="text-gray-200 font-semibold">mc.rotaria.online</span>
				</div>
			</div>

			{!isOnline && (
				<p className="text-xs text-gray-400 font-semibold">
					Status API unreachable or server offline.
				</p>
			)}
		</div>
	);
}
