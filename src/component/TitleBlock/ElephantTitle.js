import { Flex, Box } from "@react-three/flex";
import { useThree } from "@react-three/fiber";
import fontUrl from "static/font/s.otf";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { useStore } from "store/store";
const ElephantTitle = () => {
  const { viewport } = useThree();
  const { width } = viewport;
  const fontSize = width / 8;
  const elephantTitleRef = useStore((state) => state.elephantTitleRef);

  return (
    <Flex
      ref={(node) => (elephantTitleRef.current = node)}
      position-y={3}
      position-x={-width * 0.32}
      justifyContent="space-between"
      flexDirection="row"
      width={width / 1.3}
    >
      <Box width="auto" flexDirection="row">
        {`LI'L`.split("").map((letter, index) => (
          <Box key={index} width={width / 20}>
            <Text
              font={fontUrl}
              fontSize={fontSize}
              material={
                new THREE.MeshBasicMaterial({ transparent: true, opacity: 1 })
              }
            >
              {letter}
            </Text>
          </Box>
        ))}
      </Box>
      <Box width="auto" flexDirection="row">
        {`BABY`.split("").map((letter, index) => (
          <Box key={index} width={width / 11}>
            <Text
              font={fontUrl}
              fontSize={fontSize}
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

export default ElephantTitle;
