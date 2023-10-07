import React from "react";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";

export default () => {
  const texture = useLoader(RGBELoader, "/starmap.hdr");

  return (
    <mesh position={[0, 3, 0]}>
      <sphereGeometry args={[1, 128, 128]} />
      <meshBasicMaterial envMap={texture} />
    </mesh>
  );
};
