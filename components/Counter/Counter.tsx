import { Flex, Heading, Button, Spacer } from "@chakra-ui/react";
import { useState } from "react";

const Counter = () => {
  let counter = 0;
  const [count, setCount] = useState(counter);
  const counterIncrementer = () => {
    setCount(count + 1);
  };
  const counterDecrementer = () => {
    if (count <= 0) {
      {
        alert("You can't go below 0");
      }
    } else {
      setCount(count - 1);
    }
  };
  const counterReset = () => {
    setCount(0);
  };

  return (
    <div>
      <Flex
        direction="column"
        align="center"
        justify="center"
        bg={"gray.500"}
        minH="100vh"
        py="12"
        px={{ sm: "6", lg: "8" }}
      >
        <Heading color="white" mb={10}>
          Counter App
        </Heading>
        <Flex direction="row" align="center" justify="center">
          <Button m={3} onClick={counterDecrementer}>
            -
          </Button>
          <Button p={8} m={3}>
            {count}
          </Button>
          <Button m={3} onClick={counterIncrementer}>
            +
          </Button>
          <Spacer />
        </Flex>
        <Button m={3} onClick={counterReset}>
          Reset
        </Button>
      </Flex>
    </div>
  );
};
export default Counter;
