import { Flex, Box } from "@react-three/flex";
import { useThree } from "@react-three/fiber";
import fontUrl from "static/font/s.otf";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { useStore } from "store/store";
const AlienTitle = () => {
  const { viewport } = useThree();
  const { width } = viewport;
  const fontSize = width / 8;
  const alienTitleRef = useStore((state) => state.alienTitleRef);
  return (
    <Flex
      ref={(node) => (alienTitleRef.current = node)}
      position-y={3}
      position-x={-width * 0.3}
      justifyContent="space-between"
      flexDirection="row"
      width={width / 1.5}
    >
      <Box width="auto" flexDirection="row">
        {`CRE`.split("").map((letter, index) => (
          <Box key={index} width={width / 12}>
            <Text
              position={[0, -30, 0]}
              font={fontUrl}
              fontSize={fontSize}
              material={
                new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
              }
            >
              {letter}
            </Text>
          </Box>
        ))}
      </Box>
      <Box width="auto" flexDirection="row">
        {`EPY`.split("").map((letter, index) => (
          <Box key={index} width={width / 12}>
            <Text
              position={[0, -30, 0]}
              font={fontUrl}
              fontSize={fontSize}
              material={
                new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
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

export default AlienTitle;
