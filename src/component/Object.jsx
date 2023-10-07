import React from "react";
import { Gltf, useGLTF } from "@react-three/drei";

const Object = ({ url = "/cylinder.glb", ...props }) => {
  const { scene, nodes, materials, animations } = useGLTF(url);

  console.log(nodes, materials);

  return (
    <group>
      <primitive object={nodes.top}>
        <meshStandardMaterial roughness={0.1} metalness={0.2} color="red" />
      </primitive>

      <primitive object={nodes.body}>
        <meshStandardMaterial roughness={0.8} metalness={0.2} color="white" />
      </primitive>
      {/* <Gltf src="/cylinder.glb" castShadow receiveShadow {...props} /> */}
    </group>
  );
};

export default Object;
