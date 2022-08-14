import React from "react";
import create from "zustand";

export const useStore = create((set) => ({
  titleGroupRef: React.createRef(),
  floorMeshRef: React.createRef(),
  backgroundMeshRef: React.createRef(),
  elephantGroupRef: React.createRef(),
  giraffeGroupRef: React.createRef(),
  alienGroupRef: React.createRef(),
  elephantBodyRef: React.createRef(),
  giraffeBodyRef: React.createRef(),
  alienBodyRef: React.createRef(),
  mode: "elephant",
  setMode: (mode) => set({ mode }),
  canvasSizeRef: React.createRef(),
  elephantTitleRef: React.createRef(),
  giraffeTitleRef: React.createRef(),
  alienTitleRef: React.createRef(),
}));
