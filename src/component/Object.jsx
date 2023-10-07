import React from "react";
import { Gltf, useGLTF, useTexture } from "@react-three/drei";

const Object = ({ url = "/cylinder.glb", ...props }) => {
  const { scene, nodes, materials } = useGLTF(url);

  console.log(nodes, materials);
  const texture = useTexture("/starmap.hdr");

  return (
    <group>
      <mesh position={[0, 5, 0]}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshBasicMaterial envMap={texture} />
      </mesh>
      <primitive object={nodes.top}>
        <meshBasicMaterial envMap={texture} />
        {/* <meshStandardMaterial metalness={1} roughness={0} color="white" /> */}
      </primitive>

      <primitive object={nodes.body}>
        <meshStandardMaterial roughness={0.8} metalness={0.1} color="white" />
      </primitive>
      {/* <Gltf src="/cylinder.glb" castShadow receiveShadow {...props} /> */}
    </group>
  );
};

export default Object;
