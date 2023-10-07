import React from "react";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";

export default (props) => {
  const texture = useLoader(RGBELoader, "/starmap.hdr");

  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 128, 128]} />
      <meshBasicMaterial envMap={texture} />
    </mesh>
  );
};
