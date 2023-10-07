import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Preload } from "@react-three/drei";

const App = () => {
  return (
    <main>
      <Canvas>
        <PerspectiveCamera
          makeDefault
          fov={35}
          near={1}
          far={10000}
          position={[0, 0, 100]}
        />

        <color attach="background" args={["black"]} />
        <ambientLight intensity={1} />

        <OrbitControls
          makeDefault
          minDistance={1000}
          maxDistance={10000}
          enableDamping
          dampingFactor={0.03}
          enableZoom
          zoomSpeed={0.3}
          enableRotate
          rotateSpeed={0.3}
          // enablePan={false}
        />
      </Canvas>
    </main>
  );
};

export default App;
