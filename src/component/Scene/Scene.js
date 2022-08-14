import FloorBlock from "component/FloorBlock/FloorBlock";
import TitleBlock from "component/TitleBlock/TitleBlock";
import { useThree } from "@react-three/fiber";
import { useCallback, useEffect, useRef } from "react";
import { NoToneMapping } from "three";
import gsap from "gsap";
import Elephant from "component/Elephant/Elephant";
import Giraffe from "component/Giraffe/Giraffe";
import Alien from "component/Alien/Alien";
const MOVE_DURATION = 0.8;

const Scene = () => {
  const { gl } = useThree();
  const resizeHandler = useCallback(() => {
    gl.toneMapping = NoToneMapping;
  }, [gl]);
  const sceneGroup = useRef();

  const mouseMoveHandler = useCallback((event) => {
    const { clientX, clientY } = event;
    const normalizedX = (clientX / window.innerWidth) * 2 - 1;
    const normalizedY = (-clientY / window.innerHeight) * 2 + 1;
    gsap.to(sceneGroup.current.scale, {
      x: 1 - 0.03 * normalizedY,
      y: 1 - 0.03 * normalizedY,
      duration: MOVE_DURATION,
    });
    gsap.to(sceneGroup.current.position, {
      x: normalizedX * 0.2,
      duration: MOVE_DURATION,
    });
    gsap.to(sceneGroup.current.rotation, {
      x: -normalizedY * (Math.PI / 3) * 0.02,
      y: normalizedX * (Math.PI / 3) * 0.1,
      duration: MOVE_DURATION,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [mouseMoveHandler]);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);

  return (
    <>
      <group ref={sceneGroup} dispose={null}>
        <Elephant />
        <Giraffe />
        <Alien />
      </group>
      <TitleBlock />
    </>
  );
};

export default Scene;
