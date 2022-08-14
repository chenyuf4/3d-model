import { Flex, Box } from "@react-three/flex";
import { useThree } from "@react-three/fiber";
import fontUrl from "static/font/s.otf";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { useStore } from "store/store";
const GiraffeTitle = () => {
  const { viewport } = useThree();
  const { width } = viewport;
  const fontSize = width / 8;
  const giraffeTitleRef = useStore((state) => state.giraffeTitleRef);
  return (
    <Flex
      ref={(node) => (giraffeTitleRef.current = node)}
      position-y={3}
      position-x={-width * 0.2}
      justifyContent="space-between"
      flexDirection="row"
      width={width}
    >
      <Box width={width / 2} flexDirection="row">
        {`ELATED`.split("").map((letter, index) => (
          <Box key={index} width={width / 12}>
            <Text
              font={fontUrl}
              fontSize={fontSize}
              position={[0, -30, 0]}
              material={
                new THREE.MeshBasicMaterial({ transparent: true, opacity: 1 })
              }
            >
              {letter}
            </Text>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default GiraffeTitle;
