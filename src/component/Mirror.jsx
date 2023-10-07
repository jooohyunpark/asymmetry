import React from "react";
import { MeshReflectorMaterial } from "@react-three/drei";

export default () => {
  return (
    <mesh scale={3} rotation={[Math.PI * -0.5, Math.PI * 0.1, 0]}>
      <circleGeometry args={[1, 128]} />

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
    </mesh>
  );
};
