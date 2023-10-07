import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";

import Universe from "./component/Universe";
import Mirror from "./component/Mirror";

const App = () => {
  const universeY = 3;

  return (
    <main>
      <Canvas shadows flat>
        <PerspectiveCamera
          makeDefault
          fov={35}
          near={0.1}
          far={1000}
          position={[0, 6, 12]}
        />

        <color attach="background" args={["white"]} />
        <ambientLight intensity={1} color="white" />

        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.03}
          enableZoom
          zoomSpeed={0.3}
          enableRotate
          rotateSpeed={0.3}
          maxPolarAngle={Math.PI * 0.5}
          enablePan={false}
          minDistance={10}
          maxDistance={20}
          target={[0, universeY * 0.5, 0]}
        />

        <Environment files={"/starmap.hdr"} />

        <Mirror />
        <Universe position={[0, universeY, 0]} />
      </Canvas>
    </main>
  );
};

export default App;
