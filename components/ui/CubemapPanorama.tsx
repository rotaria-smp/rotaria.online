"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Image from "next/image";
import { isWebGLReallyEnabled } from "../../lib/utils";

interface CubemapFaces {
	right: string; // +X (90 degrees)
	left: string; // -X (-90 degrees)
	up: string; // +Y (-90 90)
	down: string; // -Y (-90 -90)
	front: string; // +Z (0 0)
	back: string; // -Z (180 0)
}

interface CubemapPanoramaProps {
	faces: CubemapFaces;
	autoRotate?: boolean;
	rotationSpeed?: number;
}

function CubemapSphere({
	faces,
	autoRotate = false,
	rotationSpeed = 0.001,
}: CubemapPanoramaProps) {
	const meshRef = useRef<THREE.Mesh>(null);
	const { viewport, camera } = useThree();
	const [textures, setTextures] = useState<{
		[key: string]: THREE.Texture;
	} | null>(null);
	const [isMouseDown, setIsMouseDown] = useState(false);
	const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0 });

	// Load all 6 textures
	useEffect(() => {
		const loader = new THREE.TextureLoader();
		const loadedTextures: { [key: string]: THREE.Texture } = {};
		let loadedCount = 0;

		Object.entries(faces).forEach(([key, url]) => {
			loader.load(url, (texture) => {
				texture.minFilter = THREE.LinearFilter;
				texture.magFilter = THREE.LinearFilter;
				loadedTextures[key] = texture;
				loadedCount++;

				if (loadedCount === 6) {
					setTextures(loadedTextures);
				}
			});
		});

		return () => {
			for (const texture of Object.values(loadedTextures)) {
				texture?.dispose();
			}
		};
	}, [faces]);

	// Handle mouse movement for interactive rotation
	useEffect(() => {
		if (!autoRotate) {
			const handleMouseMove = (e: MouseEvent) => {
				if (isMouseDown) {
					mouseRef.current.lastX = mouseRef.current.x;
					mouseRef.current.lastY = mouseRef.current.y;
					mouseRef.current.x = e.clientX;
					mouseRef.current.y = e.clientY;

					const deltaX = mouseRef.current.x - mouseRef.current.lastX;
					const deltaY = mouseRef.current.y - mouseRef.current.lastY;

					if (meshRef.current) {
						meshRef.current.rotation.y -= deltaX * 0.01;
						meshRef.current.rotation.x -= deltaY * 0.01;

						// Clamp vertical rotation to prevent over-rotation
						meshRef.current.rotation.x = Math.max(
							-Math.PI / 2,
							Math.min(Math.PI / 2, meshRef.current.rotation.x),
						);
					}
				}
			};

			const handleMouseDown = () => setIsMouseDown(true);
			const handleMouseUp = () => setIsMouseDown(false);

			window.addEventListener("mousemove", handleMouseMove);
			window.addEventListener("mousedown", handleMouseDown);
			window.addEventListener("mouseup", handleMouseUp);

			return () => {
				window.removeEventListener("mousemove", handleMouseMove);
				window.removeEventListener("mousedown", handleMouseDown);
				window.removeEventListener("mouseup", handleMouseUp);
			};
		}
	}, [isMouseDown, autoRotate]);

	useFrame(() => {
		if (autoRotate && meshRef.current) {
			meshRef.current.rotation.y += rotationSpeed;
		}
	});

	if (!textures) return null;

	// Create canvas-based cubemap material with 6 faces
	const canvas = document.createElement("canvas");
	canvas.width = 2048;
	canvas.height = 2048;

	return (
		<mesh ref={meshRef}>
			<sphereGeometry args={[100, 64, 64]} />
			<meshBasicMaterial
				map={textures.front}
				side={THREE.BackSide}
				toneMapped={false}
			/>
		</mesh>
	);
}

interface CubemapPanoramaViewerProps {
	faces: CubemapFaces;
	autoRotate?: boolean;
	rotationSpeed?: number;
	fallbackImage?: string;
}

export function CubemapPanorama({
	faces,
	autoRotate = false,
	rotationSpeed = 0.001,
	fallbackImage,
}: CubemapPanoramaViewerProps) {
	const [webglReady, setWebglReady] = useState(false);
	const [webglAvailable, setWebglAvailable] = useState(true);

	useEffect(() => {
		try {
			const doWeHaveWebgl = isWebGLReallyEnabled();
			setWebglAvailable(!!doWeHaveWebgl);
		} catch (e) {
			setWebglAvailable(false);
		}
	}, []);

	if (!webglAvailable) {
		return (
			<div className="absolute inset-0 z-0 overflow-hidden">
				<Image
					src={fallbackImage || faces.front}
					alt="Panorama"
					fill
					className="object-cover"
					priority
				/>
			</div>
		);
	}

	return (
		<div className="absolute inset-0 z-0 overflow-hidden">
			<Image
				src={fallbackImage || faces.front}
				alt="Panorama Fallback"
				fill
				className="object-cover transition-opacity duration-500"
				style={{ opacity: webglReady ? 0 : 1 }}
				priority
			/>

			<Canvas
				camera={{ position: [0, 0, 0], fov: 75 }}
				onCreated={() => setWebglReady(true)}
				className="transition-opacity duration-500"
				style={{ opacity: webglReady ? 1 : 0 }}
				gl={{
					alpha: false,
					antialias: true,
					preserveDrawingBuffer: false,
				}}
			>
				<color attach="background" args={["#000000"]} />
				<CubemapSphere
					faces={faces}
					autoRotate={autoRotate}
					rotationSpeed={rotationSpeed}
				/>
			</Canvas>
		</div>
	);
}
