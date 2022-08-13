import { Canvas } from "@react-three/fiber";
import "./App.scss";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import Giraffe from "./component/Giraffe/Giraffe";
import { NoToneMapping } from "three";
import Home from "component/Home/Home";
import Elephant from "./component/Elephant/Elephant";

const App = () => {
  return (
    <>
      <Home />
      <Canvas
        dpr={Math.max(window.devicePixelRatio, 2)}
        shadows
        gl={{ antialias: true, alpha: true, toneMapping: NoToneMapping }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={[0, 2, 5.5]}
            near={1}
            far={100}
            fov={60}
          />
          {/* <Giraffe /> */}
          <Elephant />
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
