import { useMemo } from "react";
import { isWebGLReallyEnabled } from "../../lib/utils";
import PanningBackground from "./PanningImage";

export const HeroImage = () => {
	// Check if webgl enabled 
	const isWebGlEnabled = useMemo(() => isWebGLReallyEnabled(), [])

	if (!isWebGlEnabled) {
		return (
			<div className="minecraft-scroll-layer">
        <div className="minecraft-scroll-image" />
        <div className="minecraft-scroll-image" />
        <div className="minecraft-scroll-image" />
      </div>
		)
	}
	
	return (
		<div className="absolute inset-0 -z-10 parallax-minecraft ">
			<PanningBackground />
		</div>
	)
}