const FloorBlock = ({ floorColor, backgroundColor }) => {
  return (
    <>
      <mesh position={[0, -0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry args={[50, 50]} />
        <meshBasicMaterial color={floorColor} />
      </mesh>
      <mesh position={[0, 25, -6]}>
        <planeBufferGeometry args={[50, 50]} />
        <meshBasicMaterial color={backgroundColor} />
      </mesh>
    </>
  );
};

export default FloorBlock;
