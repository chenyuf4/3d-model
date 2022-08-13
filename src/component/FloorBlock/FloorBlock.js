const FloorBlock = () => {
  return (
    <>
      <mesh position={[0, -0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry args={[50, 50]} />
        <meshBasicMaterial color={"#702b5e"} />
      </mesh>
      <mesh position={[0, 0, -4]}>
        <planeBufferGeometry args={[50, 50]} />
        <meshBasicMaterial color={"#662454"} />
      </mesh>
    </>
  );
};

export default FloorBlock;
