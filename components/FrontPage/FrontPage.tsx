import { Heading, Flex } from "@chakra-ui/react";
const FrontPage = () => {
  return (
    <div>
      {/* <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}> */}
      <Flex
        direction={"column"}
        // background={fromBackground}
        height={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
        p={12}
        rounded={6}
        position={"relative"}
        alignContent={"center"}
        bgColor={"gray.500"}
      >
        <Heading>Practice for NEXT.JS</Heading>
      </Flex>
    </div>
  );
};
export default FrontPage;
