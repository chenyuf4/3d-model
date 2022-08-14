import styles from "./Home.module.scss";
import clsx from "clsx";
import { useStore } from "store/store";
import gsap from "gsap";
import { useRef } from "react";
import { Power2 } from "gsap";
import { data } from "utils/constants";
const Home = () => {
  const [elephantGroupRef, elephantBodyRef] = useStore((state) => [
    state.elephantGroupRef,
    state.elephantBodyRef,
  ]);
  const [giraffeGroupRef, giraffeBodyRef] = useStore((state) => [
    state.giraffeGroupRef,
    state.giraffeBodyRef,
  ]);
  const [alienGroupRef, alienBodyRef] = useStore((state) => [
    state.alienGroupRef,
    state.alienBodyRef,
  ]);
  const [mode, setMode] = useStore((state) => [state.mode, state.setMode]);
  const canvasSizeRef = useStore((state) => state.canvasSizeRef);
  const tl = useRef(gsap.timeline());
  const duration = 1.5;
  const ease = Power2.easeInOut;
  const delay = 0.1;

  const refDic = {
    elephant: {
      group: elephantGroupRef,
      body: elephantBodyRef,
    },
    giraffe: {
      group: giraffeGroupRef,
      body: giraffeBodyRef,
    },
    alien: {
      group: alienGroupRef,
      body: alienBodyRef,
    },
  };
  const onClickHandler = () => {
    const currentMode = mode;
    const nextMode = data[mode].next;
    const otherMode = data[mode].other;
    setMode(nextMode);
    tl.current.clear();
    tl.current
      .set(
        refDic[currentMode].group.current.position,
        {
          y: 0,
        },
        "start"
      )
      .set(
        refDic[nextMode].group.current.position,
        {
          y: 0,
        },
        "start"
      )
      .set(
        refDic[otherMode].group.current.position,
        {
          y: -5 * canvasSizeRef.current.height,
        },
        "start"
      )
      .to(
        refDic[currentMode].group.current.rotation,
        {
          z: Math.PI,
          duration,
          delay,
          ease,
        },
        "start"
      )
      .to(
        refDic[currentMode].body.current.rotation,
        {
          z: -Math.PI,
          duration,
          ease,
        },
        "start"
      )
      .fromTo(
        refDic[nextMode].group.current.rotation,
        {
          z: -Math.PI,
        },
        {
          z: 0,
          duration,
          ease,
          delay,
        },
        "start"
      )
      .fromTo(
        refDic[nextMode].body.current.rotation,
        {
          z: Math.PI,
        },
        {
          z: 0,
          duration,
          ease,
        },
        "start"
      );
  };
  return (
    <div className={clsx(styles["home-container"], "p-5")}>
      <div className="d-flex justify-content-between">
        <div className="s-font text-white h3 mb-0">STEPHEN</div>
        <button
          className="btn btn-sm text-white btn-primary"
          onClick={onClickHandler}
        >
          Change
        </button>
      </div>

      <div className={clsx(styles["footer-container"], "p-5")}>
        <div
          className="text-center text-white c-font h4 mb-0"
          style={{ letterSpacing: "12px" }}
        >
          ELEPHANT
        </div>
      </div>
    </div>
  );
};

export default Home;
