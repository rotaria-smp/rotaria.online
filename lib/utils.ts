import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function isWebGLReallyEnabled(): boolean {
	try {
		const canvas = document.createElement("canvas");
		const gl =
			canvas.getContext("webgl2") ||
			canvas.getContext("webgl") ||
			canvas.getContext("experimental-webgl");

		if (!gl || !("getParameter" in gl)) return false;

		// Try a real operation to ensure the GPU isn't failing
		const test = gl.getParameter(gl.VERSION);
		return typeof test === "string";
	} catch {
		return false;
	}
}

/* Randomness */
function getDateKey(date = new Date()) {
	const yyyy = date.getFullYear();
	const mm = String(date.getMonth() + 1).padStart(2, "0");
	const dd = String(date.getDate()).padStart(2, "0");
	return `${yyyy}-${mm}-${dd}`;
}

function hashString(str: string) {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = (hash * 31 + str.charCodeAt(i)) | 0;
	}
	return Math.abs(hash) || 1;
}

export function mulberry32(seed: number) {
	return () => {
		// biome-ignore lint/suspicious/noAssignInExpressions: taken "as is"
		let t = (seed += 0x6d2b79f5);
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

export function getDailyRandomItems(
	arr: any[],
	count: number,
	date = new Date(),
) {
	if (!Array.isArray(arr) || arr.length === 0) return [];

	const key = getDateKey(date);
	const seed = hashString(key);
	const rng = mulberry32(seed);

	const copy = [...arr];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(rng() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}

	return copy.slice(0, Math.min(count, copy.length));
}
