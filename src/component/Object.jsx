import React, { useEffect, useRef } from "react";
import { Gltf, useGLTF, MeshReflectorMaterial } from "@react-three/drei";
import { Reflector } from "three-stdlib";

export default ({ url = "/cylinder.glb", ...props }) => {
  const ref = useRef(null);

  const { scene, nodes, materials } = useGLTF(url);

  // console.log(nodes, materials);

  // useEffect(() => {
  //   console.log(nodes.top);

  //   const m = new Reflector(nodes.top.geometry, {
  //     clipBias: 0.003,
  //     textureWidth: window.innerWidth * window.devicePixelRatio,
  //     textureHeight: window.innerHeight * window.devicePixelRatio,
  //     color: 0xb5b5b5,
  //   });

  //   ref.current.add(m);

  //   console.log(m);
  // }, []);

  return (
    <group>
      <primitive object={nodes.top}>
        <MeshReflectorMaterial
          blur={[0, 0]}
          resolution={2048}
          mixBlur={1}
          mixStrength={100}
          roughness={0}
          // depthScale={1.2}
          // minDepthThreshold={0.4}
          // maxDepthThreshold={1.4}
          // color="black"
          // metalness={0.5}
        />
      </primitive>

      <primitive object={nodes.body}>
        <meshStandardMaterial roughness={0.8} metalness={0.1} color="white" />
      </primitive>
      {/* <Gltf src="/cylinder.glb" castShadow receiveShadow {...props} /> */}
    </group>
  );
};
