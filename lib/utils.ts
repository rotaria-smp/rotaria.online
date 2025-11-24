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
