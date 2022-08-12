import { Canvas } from "@react-three/fiber";
import "./App.scss";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import Scene from "./component/Scene/Scene";
import { NoToneMapping } from "three";

const App = () => {
  return (
    <Canvas
      dpr={Math.max(window.devicePixelRatio, 2)}
      // linear={true}
      // flat={true}
      // legacy={true}
      shadows
      gl={{ antialias: true, alpha: true }}
      onCreated={(state) => {
        state.gl.toneMapping = NoToneMapping;
      }}
    >
      <Suspense fallback={null}>
        <PerspectiveCamera
          makeDefault
          position={[0, 2, 6.8]}
          near={1}
          far={100}
          fov={60}
        />
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default App;
