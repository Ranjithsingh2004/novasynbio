"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function DnaStrand() {
  const groupRef = useRef<THREE.Group>(null);
  const strand1Ref = useRef<THREE.Group>(null);
  const strand2Ref = useRef<THREE.Group>(null);

  const { positions1, positions2, connections } = useMemo(() => {
    const p1: [number, number, number][] = [];
    const p2: [number, number, number][] = [];
    const conn: { start: [number, number, number]; end: [number, number, number] }[] = [];
    const numPoints = 40;
    const radius = 1.2;
    const height = 8;
    const turns = 2.5;

    for (let i = 0; i < numPoints; i++) {
      const t = i / numPoints;
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * height;

      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      p1.push([x1, y, z1]);
      p2.push([x2, y, z2]);

      if (i % 3 === 0) {
        conn.push({ start: [x1, y, z1], end: [x2, y, z2] });
      }
    }

    return { positions1: p1, positions2: p2, connections: conn };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Strand 1 - Cyan */}
        <group ref={strand1Ref}>
          {positions1.map((pos, i) => (
            <mesh key={`s1-${i}`} position={pos}>
              <sphereGeometry args={[0.06, 12, 12]} />
              <meshPhysicalMaterial
                color="#D4AF37"
                roughness={0.4}
                metalness={0.2}
                transparent
                opacity={0.9}
              />
            </mesh>
          ))}
          {/* Connect strand 1 spheres with lines */}
          {positions1.slice(0, -1).map((pos, i) => {
            const next = positions1[i + 1];
            const mid: [number, number, number] = [
              (pos[0] + next[0]) / 2,
              (pos[1] + next[1]) / 2,
              (pos[2] + next[2]) / 2,
            ];
            const length = Math.sqrt(
              (next[0] - pos[0]) ** 2 + (next[1] - pos[1]) ** 2 + (next[2] - pos[2]) ** 2
            );
            const dir = new THREE.Vector3(
              next[0] - pos[0],
              next[1] - pos[1],
              next[2] - pos[2]
            ).normalize();
            const quat = new THREE.Quaternion().setFromUnitVectors(
              new THREE.Vector3(0, 1, 0),
              dir
            );

            return (
              <mesh key={`l1-${i}`} position={mid} quaternion={quat}>
                <cylinderGeometry args={[0.015, 0.015, length, 6]} />
                <meshPhysicalMaterial
                  color="#D4AF37"
                  roughness={0.4}
                  metalness={0.2}
                  transparent
                  opacity={0.6}
                />
              </mesh>
            );
          })}
        </group>

        {/* Strand 2 - Purple */}
        <group ref={strand2Ref}>
          {positions2.map((pos, i) => (
            <mesh key={`s2-${i}`} position={pos}>
              <sphereGeometry args={[0.06, 12, 12]} />
              <meshPhysicalMaterial
                color="#2D4A3E"
                roughness={0.6}
                metalness={0.1}
                transparent
                opacity={0.9}
              />
            </mesh>
          ))}
          {positions2.slice(0, -1).map((pos, i) => {
            const next = positions2[i + 1];
            const mid: [number, number, number] = [
              (pos[0] + next[0]) / 2,
              (pos[1] + next[1]) / 2,
              (pos[2] + next[2]) / 2,
            ];
            const length = Math.sqrt(
              (next[0] - pos[0]) ** 2 + (next[1] - pos[1]) ** 2 + (next[2] - pos[2]) ** 2
            );
            const dir = new THREE.Vector3(
              next[0] - pos[0],
              next[1] - pos[1],
              next[2] - pos[2]
            ).normalize();
            const quat = new THREE.Quaternion().setFromUnitVectors(
              new THREE.Vector3(0, 1, 0),
              dir
            );

            return (
              <mesh key={`l2-${i}`} position={mid} quaternion={quat}>
                <cylinderGeometry args={[0.015, 0.015, length, 6]} />
                <meshPhysicalMaterial
                  color="#2D4A3E"
                  roughness={0.6}
                  metalness={0.1}
                  transparent
                  opacity={0.6}
                />
              </mesh>
            );
          })}
        </group>

        {/* Base pair connections */}
        {connections.map((conn, i) => {
          const mid: [number, number, number] = [
            (conn.start[0] + conn.end[0]) / 2,
            (conn.start[1] + conn.end[1]) / 2,
            (conn.start[2] + conn.end[2]) / 2,
          ];
          const length = Math.sqrt(
            (conn.end[0] - conn.start[0]) ** 2 +
            (conn.end[1] - conn.start[1]) ** 2 +
            (conn.end[2] - conn.start[2]) ** 2
          );
          const dir = new THREE.Vector3(
            conn.end[0] - conn.start[0],
            conn.end[1] - conn.start[1],
            conn.end[2] - conn.start[2]
          ).normalize();
          const quat = new THREE.Quaternion().setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            dir
          );

          return (
            <mesh key={`conn-${i}`} position={mid} quaternion={quat}>
              <cylinderGeometry args={[0.01, 0.01, length, 4]} />
              <meshPhysicalMaterial
                color="#E07A5F"
                roughness={0.7}
                metalness={0.1}
                transparent
                opacity={0.4}
              />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

function BackgroundParticles() {
  const count = 800;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#D4AF37"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

export default function DnaHelix() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#D4AF37" />
        <pointLight position={[-5, -5, 5]} intensity={1} color="#E07A5F" />
        <pointLight position={[0, 3, 3]} intensity={0.8} color="#FFFFFF" />
        <DnaStrand />
        <BackgroundParticles />
      </Canvas>
    </div>
  );
}
