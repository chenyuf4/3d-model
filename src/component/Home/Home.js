import styles from "./Home.module.scss";
import clsx from "clsx";
import { useStore } from "store/store";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Power2 } from "gsap";
import { data } from "utils/constants";
import ArrowIcon from "./ArrowIcon";
import sound from "static/music/sound.mp3";
const audio = new Audio(sound);
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
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [elephantTitleRef, giraffeTitleRef, alienTitleRef] = useStore(
    (state) => [
      state.elephantTitleRef,
      state.giraffeTitleRef,
      state.alienTitleRef,
    ]
  );
  const [mode, setMode] = useStore((state) => [state.mode, state.setMode]);
  const canvasSizeRef = useStore((state) => state.canvasSizeRef);
  const [animating, setAnimating] = useState(false);

  const tl = useRef(
    gsap.timeline({
      onComplete: () => {
        setAnimating(false);
      },
    })
  );
  const duration = 1.5;
  const ease = Power2.easeInOut;
  const delay = 0.1;
  const titleStagger = 0.05;
  const mainAnimationDelay = 0.3;

  const refDic = {
    elephant: {
      group: elephantGroupRef,
      body: elephantBodyRef,
      title: elephantTitleRef,
    },
    giraffe: {
      group: giraffeGroupRef,
      body: giraffeBodyRef,
      title: giraffeTitleRef,
    },
    alien: {
      group: alienGroupRef,
      body: alienBodyRef,
      title: alienTitleRef,
    },
  };

  const reformatTitleArray = (name) => {
    if (!refDic[name].title.current) return [];
    const reference = refDic[name].title;
    if (name === "elephant" || name === "alien") {
      return [
        ...reference.current.children[0].children.map(
          (item) => item.children[0]
        ),
        ...reference.current.children[1].children.map(
          (item) => item.children[0]
        ),
      ];
    }
    return reference.current.children[0].children.map(
      (item) => item.children[0]
    );
  };

  const onClickHandler = () => {
    if (animating) return;
    setAnimating(true);
    const currentMode = mode;
    const nextMode = data[mode].next;
    const otherMode = data[mode].other;
    const currentTitleArr = reformatTitleArray(currentMode);
    const nextTitleArr = reformatTitleArray(nextMode);
    const otherTitleArr = reformatTitleArray(otherMode);
    const currentTitlePositionArr = currentTitleArr.map(
      (item) => item.position
    );
    const currentTitleRotationArr = currentTitleArr.map(
      (item) => item.rotation
    );
    const currentTitleMaterialArr = currentTitleArr.map(
      (item) => item.material
    );
    const nextTitlePositionArr = nextTitleArr.map((item) => item.position);
    const nextTitleRotationArr = nextTitleArr.map((item) => item.rotation);
    const nextTitleMaterialArr = nextTitleArr.map((item) => item.material);
    const otherTitlePositionArr = otherTitleArr.map((item) => item.position);
    const otherTitleRotationArr = otherTitleArr.map((item) => item.rotation);
    const otherTitleMaterialArr = otherTitleArr.map((item) => item.material);
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
      .set(
        nextTitlePositionArr,
        {
          y: -30,
        },
        "start"
      )
      .set(
        otherTitlePositionArr,
        {
          y: -30,
        },
        "start"
      )
      .to(".arrow-container", {
        transform: "translateX(100%)",
        ease,
        duration: 0.4,
      }) //animate arrow
      .to(
        //animated titles
        currentTitleRotationArr,
        {
          x: -Math.PI / 2,
          ease,
          duration: 0.6,
          stagger: titleStagger,
        },
        "start"
      )
      .to(
        currentTitleMaterialArr,
        {
          opacity: 0,
          ease,
          duration: 0.6,
          stagger: titleStagger,
        },
        "start"
      )
      .set(
        currentTitlePositionArr,
        {
          y: -30,
        },
        "0.8"
      )
      .set(
        nextTitlePositionArr,
        {
          y: 0,
        },
        "1.25"
      )
      .fromTo(
        //animated titles
        nextTitleRotationArr,
        {
          x: Math.PI / 2,
        },
        {
          x: 0,
          ease,
          duration: 0.6,
          stagger: titleStagger,
        },
        "1.3"
      )
      .fromTo(
        nextTitleMaterialArr,
        { opacity: 0 },
        {
          opacity: 1,
          ease,
          duration: 0.6,
          stagger: titleStagger,
        },
        "1.3"
      )
      .to(
        refDic[currentMode].group.current.rotation,
        {
          z: Math.PI,
          duration,
          delay,
          ease,
        },
        mainAnimationDelay
      )
      .to(
        refDic[currentMode].body.current.rotation,
        {
          z: -Math.PI,
          duration,
          ease,
        },
        mainAnimationDelay
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
        mainAnimationDelay
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
        mainAnimationDelay
      )
      .to(
        `.${currentMode}-title`,
        {
          transform: "translateX(-100%)",
          duration: 0.6,
          stagger: 0.04,
          ease,
        },
        mainAnimationDelay
      )
      .fromTo(
        `.${nextMode}-title`,
        { transform: "translateX(100%)" },
        {
          transform: "translateX(0%)",
          duration: 0.6,
          stagger: 0.04,
          ease,
        },
        mainAnimationDelay + 0.7
      )
      .fromTo(
        ".arrow-container",
        {
          transform: "translateX(-100%)",
        },
        {
          transform: "translateX(0%)",
          ease,
          duration: 0.4,
        },
        mainAnimationDelay + 1.1
      ); //animate arrow;
  };
  return (
    <div className={clsx(styles["home-container"], "p-5")}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="s-font text-white h3 mb-0">STEPHEN</div>
        <div className="d-flex align-items-center">
          <div
            className="cursor-pointer"
            onClick={() => {
              if (musicPlaying) {
                audio.pause();
              } else {
                audio.play();
              }
              setMusicPlaying(!musicPlaying);
            }}
          >
            {musicPlaying ? (
              <i className="bi bi-volume-up-fill text-white h3 mb-0"></i>
            ) : (
              <i className="bi bi-volume-mute-fill text-white h3 mb-0"></i>
            )}
          </div>
          <div className="overflow-hidden ms-5">
            <div
              className={clsx(
                styles["icon-container"],
                !animating && "cursor-pointer",
                "overflow-hidden"
              )}
            >
              <div className="arrow-container" onClick={onClickHandler}>
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx(styles["footer-container"], "p-5")}>
        <div className="text-center text-white c-font h4 mb-0 d-flex justify-content-center">
          {"ELEPHANT".split("").map((letter, index) => (
            <div key={index} className="overflow-hidden ms-1 me-1">
              <div
                className="position-relative elephant-title"
                style={{ transform: "translateX(-0%)" }}
              >
                {letter}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={clsx(styles["footer-container"], "p-5")}>
        <div className="text-center text-white c-font h4 mb-0 d-flex justify-content-center">
          {"GIRAFFE".split("").map((letter, index) => (
            <div key={index} className="overflow-hidden ms-1 me-1">
              <div
                className="position-relative giraffe-title"
                style={{ transform: "translateX(-100%)" }}
              >
                {letter}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={clsx(styles["footer-container"], "p-5")}>
        <div className="text-center text-white c-font h4 mb-0 d-flex justify-content-center">
          {"CTHULHU".split("").map((letter, index) => (
            <div key={index} className="overflow-hidden ms-1 me-1">
              <div
                className="position-relative alien-title"
                style={{ transform: "translateX(-100%)" }}
              >
                {letter}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
