import { Canvas } from "@react-three/fiber";
import "./App.scss";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { NoToneMapping } from "three";
import Home from "component/Home/Home";
import Scene from "component/Scene/Scene";
import { useStore } from "store/store";
const App = () => {
  const canvasSizeRef = useStore((state) => state.canvasSizeRef);
  return (
    <>
      <Home />
      <Canvas
        dpr={Math.max(window.devicePixelRatio, 2)}
        shadows
        gl={{ antialias: true, alpha: true, toneMapping: NoToneMapping }}
        onCreated={(state) => {
          const { viewport } = state;
          const { width, height } = viewport;
          canvasSizeRef.current = {
            width,
            height,
          };
        }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={[0, 2, 5.5]}
            near={1}
            far={100}
            fov={60}
          />
          <Scene />
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
