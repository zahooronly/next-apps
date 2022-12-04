import { Flex, Heading, Spacer } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
const Home = () => {
  return (
    <div>
      <Flex height={"95vh"} alignItems={"center"} justifyContent={"center"}>
        <Flex
          direction={"column"}
          background={"gray.300"}
          p={200}
          rounded={6}
          position={"relative"}
        >
          <Heading mb={6}>Your todo List</Heading>
          <Input type="text" placeholder="Enter your task..." />
          {/* <FormControl id="email"> */}
        </Flex>
      </Flex>
    </div>
  );
};
export default Home;
