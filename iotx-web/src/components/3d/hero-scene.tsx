"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

function DataArcs() {
  const g = useRef<THREE.Group>(null);
  const { arcs } = useMemo(() => {
    const pts: THREE.Vector3[][] = [];
    for (let i = 0; i < 5; i++) {
      const a0 = (i / 5) * Math.PI * 2;
      const a1 = a0 + 0.9;
      const r = 1.5;
      const segs: THREE.Vector3[] = [];
      for (let t = 0; t <= 1; t += 0.08) {
        const a = a0 + (a1 - a0) * t;
        segs.push(
          new THREE.Vector3(Math.cos(a) * r, Math.sin(a * 0.4) * 0.2, Math.sin(a) * r)
        );
      }
      pts.push(segs);
    }
    return { arcs: pts };
  }, []);

  useFrame((_, d) => {
    if (g.current) g.current.rotation.y += d * 0.1;
  });

  return (
    <group ref={g}>
      {arcs.map((p, i) => (
        <Line
          key={`arc-${i}`}
          points={p}
          color={i % 2 ? "#16a34a" : "#2dd4bf"}
          lineWidth={0.4}
          transparent
          opacity={0.4}
        />
      ))}
    </group>
  );
}

function IotNodes() {
  const points = useMemo(() => {
    return Array.from({ length: 56 }, (_, i) => {
      const t = (i / 55) * Math.PI * 2;
      const p = 1.42 + (i % 3) * 0.01;
      return new THREE.Vector3(
        p * Math.cos(t) * Math.sin(i * 0.31),
        p * Math.sin(t * 0.7) * 0.55,
        p * Math.sin(t) * Math.cos(i * 0.17)
      );
    });
  }, []);

  const inst = useRef<THREE.InstancedMesh>(null);
  const tRef = useRef(0);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useLayoutEffect(() => {
    if (!inst.current) return;
    for (let i = 0; i < points.length; i++) {
      const sc = 0.02 + (i % 3) * 0.01;
      dummy.position.copy(points[i]);
      dummy.scale.set(sc, sc, sc);
      dummy.updateMatrix();
      inst.current.setMatrixAt(i, dummy.matrix);
    }
    inst.current.instanceMatrix.needsUpdate = true;
  }, [dummy, points]);

  useFrame((_, d) => {
    tRef.current += d;
    const m = inst.current;
    if (!m) return;
    for (let i = 0; i < points.length; i++) {
      const wobble = 1 + Math.sin(tRef.current * 1.2 + i) * 0.02;
      const sc = 0.02 + (i % 3) * 0.01;
      dummy.position.copy(points[i]).multiplyScalar(wobble);
      dummy.scale.set(sc, sc, sc);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    }
    m.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={inst} args={[undefined, undefined, 56]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#2dd4bf"
        emissive="#0c2a1d"
        emissiveIntensity={1.4}
        metalness={0.2}
        roughness={0.2}
        toneMapped
      />
    </instancedMesh>
  );
}

function GlobeRig() {
  const g = useRef<THREE.Group>(null);
  useFrame((st) => {
    if (!g.current) return;
    g.current.rotation.y = st.clock.getElapsedTime() * 0.2;
  });

  return (
    <group ref={g}>
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.25}>
        <mesh>
          <icosahedronGeometry args={[1.25, 2]} />
          <meshBasicMaterial
            color="#123226"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.28, 1]} />
          <meshBasicMaterial
            color="#16a34a"
            wireframe
            transparent
            opacity={0.18}
          />
        </mesh>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <group>
      <ambientLight intensity={0.45} color="#20382c" />
      <directionalLight position={[4, 2, 4]} intensity={0.6} color="#52c98e" />
      <pointLight position={[-3, 1, 2]} intensity={1.1} color="#2dd4bf" />
      <GlobeRig />
      <IotNodes />
      <DataArcs />
    </group>
  );
}

type HeroCanvasProps = { className?: string };

export function HeroCanvas({ className }: HeroCanvasProps) {
  return (
    <div className={className} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 50 }}
        dpr={[1, 1.75]}
        gl={{
          powerPreference: "high-performance",
          antialias: true,
          alpha: true,
        }}
      >
        <fog attach="fog" args={["#0a0f1c", 2.2, 7]} />
        <Scene />
      </Canvas>
    </div>
  );
}
