import {
  Flex,
  Heading,
  Box,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
const Home = () => {
  const { toggleColorMode } = useColorMode();
  const fromBackground = useColorModeValue("gray.100", "gray.900");
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
        <Flex
          direction={"column"}
          background={fromBackground}
          p={12}
          rounded={6}
          position={"relative"}
          alignContent={"center"}
        >
          <Heading mb={6}>Login Here</Heading>
          <Input
            type="email"
            placeholder="you@example.com"
            variant={"filled"}
            mb={3}
          />
          <Input
            type="password"
            placeholder="********"
            mb={6}
            variant={"filled"}
          />
          <Button colorScheme={"gray"}>Login</Button>
          <Box
            position={"absolute"}
            top={2}
            right={2}
            onClick={() => {
              toggleColorMode();
              setToggle(!toggle);
            }}
          >
            {toggle ? <IoMoon /> : <IoSunny />}
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};
export default Home;
