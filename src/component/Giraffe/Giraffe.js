/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Noss (https://sketchfab.com/Noss)
license: SKETCHFAB Standard (https://sketchfab.com/licenses)
source: https://sketchfab.com/models/c29e6775218b4ec9b345677660a17a24
title: Day 20 - Minimalistic : Split
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { useStore } from "store/store";
import { useThree } from "@react-three/fiber";
import FloorBlock from "component/FloorBlock/FloorBlock";
import { data } from "utils/constants";
export default function Giraffe() {
  const { nodes, materials } = useGLTF("/giraffe.glb");
  const giraffeGroupRef = useStore((state) => state.giraffeGroupRef);
  const giraffeBodyRef = useStore((state) => state.giraffeBodyRef);
  const { viewport } = useThree();
  const { width } = viewport;
  return (
    <group
      ref={(node) => (giraffeGroupRef.current = node)}
      rotation={[0, 0, -Math.PI]}
    >
      <group
        ref={(node) => (giraffeBodyRef.current = node)}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        position={[0, 0.005, 0]}
      >
        <group position={[0.11, 0, 0]} rotation={[0, 0, 0.45]} scale={1.03}>
          <mesh
            geometry={nodes.girafe_0.geometry}
            material={materials.simple_wood}
          />
        </group>
        <mesh geometry={nodes.cyclo_0.geometry} material={materials.cyclo} />
      </group>
      <FloorBlock
        floorColor={data.giraffe.floorColor}
        backgroundColor={data.giraffe.backgroundColor}
      />
    </group>
  );
}

useGLTF.preload("/giraffe.glb");
