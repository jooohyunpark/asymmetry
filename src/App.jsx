import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Preload } from "@react-three/drei";
import Object from "./component/Object";

const App = () => {
  return (
    <main>
      <Canvas flat shadows>
        <PerspectiveCamera
          makeDefault
          fov={35}
          near={1}
          far={1000}
          position={[0, 0, 50]}
        />

        <color attach="background" args={["white"]} />
        <ambientLight intensity={1} color="white" />

        <OrbitControls
          makeDefault
          // minDistance={1000}
          // maxDistance={10000}
          enableDamping
          dampingFactor={0.03}
          enableZoom
          zoomSpeed={0.3}
          enableRotate
          rotateSpeed={0.3}
          // enablePan={false}
        />

        <Object />
      </Canvas>
    </main>
  );
};

export default App;
