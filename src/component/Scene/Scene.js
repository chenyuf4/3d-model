import FloorBlock from "component/FloorBlock/FloorBlock";
import TitleBlock from "component/TitleBlock/TitleBlock";
import { useThree } from "@react-three/fiber";
import { useCallback, useEffect, useRef } from "react";
import { NoToneMapping } from "three";
import gsap from "gsap";
import Elephant from "component/Elephant/Elephant";
import Giraffe from "component/Giraffe/Giraffe";
const MOVE_DURATION = 0.8;

const Scene = () => {
  const { gl } = useThree();
  const resizeHandler = useCallback(() => {
    gl.toneMapping = NoToneMapping;
  }, [gl]);
  const sceneGroup = useRef();

  const data = [
    {
      component: <Elephant />,
      name: "ELEPHANT",
      backgroundColor: "#702b5e",
      floorColor: "#662454",
      index: 0,
    },
    {
      component: <Giraffe />,
      name: "GIRAFFE",
      backgroundColor: "#86573c",
      floorColor: "#a76d44",
      index: 1,
    },
  ];
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
        {data[1].component}
        <FloorBlock
          backgroundColor={data[1].backgroundColor}
          floorColor={data[1].floorColor}
        />
      </group>
      <TitleBlock />
    </>
  );
};

export default Scene;
