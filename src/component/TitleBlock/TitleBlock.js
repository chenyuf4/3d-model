import { useThree } from "@react-three/fiber";
import { Flex, Box } from "@react-three/flex";
import fontUrl from "static/font/s.otf";
import { Text } from "@react-three/drei";
const TitleBlock = () => {
  const { viewport } = useThree();
  const { width } = viewport;
  const fontSize = width / 8;
  return (
    <Flex
      position-y={2.5}
      position-x={-width * 0.29}
      justifyContent="space-between"
      flexDirection="row"
      width={width / 1.8}
    >
      <Box width="auto">
        <Text font={fontUrl} fontSize={fontSize}>
          LI'L
        </Text>
      </Box>
      <Box width="auto">
        <Text font={fontUrl} fontSize={fontSize}>
          BABY
        </Text>
      </Box>
    </Flex>
  );
};

export default TitleBlock;
