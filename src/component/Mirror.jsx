import React from "react";
import { MeshReflectorMaterial } from "@react-three/drei";

export default ({ radius = 3, ...props }) => {
  const angle = Math.PI * 0.1;

  return (
    <group>
      <mesh scale={radius * Math.cos(angle)} rotation={[Math.PI * -0.5, 0, 0]}>
        <circleGeometry args={[1, 128]} />
        <meshStandardMaterial color="black" />
      </mesh>

      <mesh
        scale={radius}
        rotation={[Math.PI * -0.5, angle, 0]}
        position={[0, radius * Math.sin(angle) + 0.5, 0]}
        castShadow
        {...props}
      >
        <circleGeometry args={[1, 256]} />

        <MeshReflectorMaterial
          blur={[0, 0]}
          resolution={2048}
          mixBlur={0}
          mixStrength={10}
          mirror={1}
          color={0xb5b5b5}
          roughness={1}
          metalness={0}
        />
        {/* <meshNormalMaterial /> */}
      </mesh>
    </group>
  );
};
