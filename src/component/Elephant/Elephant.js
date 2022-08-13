/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Noss (https://sketchfab.com/Noss)
license: SKETCHFAB Standard (https://sketchfab.com/licenses)
source: https://sketchfab.com/models/2135f146d2964c22b5bfac3134c35191
title: Day 05 - Object : Spherical
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Elephant() {
  const { nodes, materials } = useGLTF("/elephant.glb");

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <group
        position={[0.34, 0, 0.41]}
        rotation={[0.54, -0.03, 0.38]}
        scale={0.9}
      >
        <mesh
          geometry={nodes.highlights_0.geometry}
          material={materials.highlights}
        />
      </group>
      <group
        position={[0.34, 0, 0.41]}
        rotation={[0.54, -0.03, 0.38]}
        scale={0.9}
      >
        <mesh
          geometry={nodes.eyes_0.geometry}
          material={materials["yeux.001"]}
        />
      </group>
      <group
        position={[0.34, 0, 0.41]}
        rotation={[0.54, -0.03, 0.38]}
        scale={0.9}
      >
        <mesh geometry={nodes.eyesnoir_0.geometry} material={materials.noir} />
      </group>
      <group
        position={[0.34, 0, 0.41]}
        rotation={[0.54, -0.03, 0.38]}
        scale={0.9}
      >
        <mesh
          geometry={nodes.eyescouleur_0.geometry}
          material={materials["yeux.couleur"]}
        />
      </group>
      <group
        position={[0.34, 0, 0.41]}
        rotation={[0.54, -0.03, 0.38]}
        scale={0.9}
      >
        <mesh
          geometry={nodes.defenses_0.geometry}
          material={materials.defenses}
        />
      </group>
      <mesh geometry={nodes.cyclo_0.geometry} material={materials.cyclo}></mesh>
      <group
        position={[0.34, 0, 0.41]}
        rotation={[0.54, -0.03, 0.38]}
        scale={0.9}
      >
        <mesh geometry={nodes.body_0.geometry} material={materials.peau} />
      </group>
    </group>
  );
}

useGLTF.preload("/elephant.glb");
