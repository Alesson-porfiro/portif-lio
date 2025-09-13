import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import type { Points } from "three";

const Stars: React.FC = () => {
  const pointsRef = useRef<Points>(null);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      // 🌌 Rotação lenta
      pointsRef.current.rotation.y += 0.0005;

      // ✨ Twinkle suave
      const time = clock.getElapsedTime();
      const opacities = pointsRef.current.geometry.attributes.opacity as THREE.BufferAttribute;
      for (let i = 0; i < opacities.array.length; i++) {
        opacities.array[i] = 0.6 + 0.4 * Math.sin(time * 0.5 + i);
      }
      opacities.needsUpdate = true;
    }
  });

  const [positions, opacities, sizes, colors] = useMemo(() => {
    const starCount = 70000;
    const pos = new Float32Array(starCount * 3);
    const op = new Float32Array(starCount);
    const size = new Float32Array(starCount);
    const col = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color("#ffffff"), // branco
      new THREE.Color("#a5b4fc"), // azul suave
      new THREE.Color("#38bdf8"), // ciano
      new THREE.Color("#c084fc"), // roxo
    ];

    for (let i = 0; i < starCount; i++) {
      pos.set(
        [
          (Math.random() - 0.5) * 800,
          (Math.random() - 0.5) * 800,
          (Math.random() - 0.5) * 800,
        ],
        i * 3
      );

      op[i] = Math.random(); // opacidade inicial
      size[i] = Math.random() * 1.5 + 0.5; // tamanhos variados

      const color = palette[Math.floor(Math.random() * palette.length)];
      col.set([color.r, color.g, color.b], i * 3);
    }

    return [pos, op, size, col];
  }, []);

  const sprite = useMemo(
    () =>
      new THREE.TextureLoader().load(
        "https://threejs.org/examples/textures/sprites/disc.png"
      ),
    []
  );

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-opacity" args={[opacities, 1]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <shaderMaterial
        vertexColors
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          pointTexture: { value: sprite },
        }}
        vertexShader={`
          attribute float opacity;
          attribute float size;
          varying float vOpacity;
          varying vec3 vColor;
          void main() {
            vOpacity = opacity;
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          uniform sampler2D pointTexture;
          varying float vOpacity;
          varying vec3 vColor;
          void main() {
            vec4 texColor = texture2D(pointTexture, gl_PointCoord);
            gl_FragColor = vec4(vColor, vOpacity) * texColor;
          }
        `}
      />
    </points>
  );
};

const Starfield: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        background: "black",
      }}
    >
      <Canvas camera={{ position: [0, 0, 200], fov: 75 }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default Starfield;
