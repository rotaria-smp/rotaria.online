"use client";
import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import Image from "next/image";

import * as THREE from 'three';
import { isWebGLReallyEnabled } from '@/lib/utils';

interface PanningImageProps {
  url: string;
  speed?: number;
}

function PanningImage({ url, speed = 0.01 }: PanningImageProps) {
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const texture = useLoader(THREE.TextureLoader, url);

  useEffect(() => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
  }, [texture]);

  useFrame((_, delta) => {
    if (materialRef.current && materialRef.current.map) {
      materialRef.current.map.offset.x += speed * delta;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[20, 10]} />
      <meshBasicMaterial ref={materialRef} map={texture} />
    </mesh>
  );
}

export function PanningBackground({url = "/sample_image.png"}: {url?: string}) {
  const [webglReady, setWebglReady] = useState(false);
	const isWebGlEnabled = useMemo(() => isWebGLReallyEnabled(), [])

	// TODO : fix hydrationerror
	if (!isWebGlEnabled) {
		return (
			<div className="minecraft-scroll-layer" suppressHydrationWarning >
        <div className="minecraft-scroll-image" />
        <div className="minecraft-scroll-image" />
        <div className="minecraft-scroll-image" />
      </div>
		)
	}

	// Webgl based with fallback image
  return (
    <div
			suppressHydrationWarning
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <Image
        src={url}
        alt="Background"
				width={720}
				height={480}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.5s ease',
          opacity: webglReady ? 0 : 1,
          pointerEvents: 'none',
        }}
      />

      {/* WebGL canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 70 }}
        onCreated={() => {
          setWebglReady(true);
        }}
        style={{
          width: '100%',
          height: '100%',
          transition: 'opacity 0.5s ease',
          opacity: webglReady ? 1 : 0,
        }}
      >
        <PanningImage url={url} speed={0.01} />
      </Canvas>
    </div>
  );
}
