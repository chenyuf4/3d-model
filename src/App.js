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
      shadows
      gl={{ antialias: true, alpha: true, toneMapping: NoToneMapping }}
    >
      <Suspense fallback={null}>
        <PerspectiveCamera
          makeDefault
          position={[0, 2, 5.3]}
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
