import React, { Fragment } from "react";
import { SoftShadows } from "@react-three/drei";

export default () => {
  return (
    <Fragment>
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1}
        shadow-mapSize={1024}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 10, 0.1, 30]}
        />
      </directionalLight>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial transparent opacity={0.4} color={"black"} />
        {/* <meshNormalMaterial /> */}
      </mesh>

      <SoftShadows />
    </Fragment>
  );
};
