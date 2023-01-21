import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Text,
  HStack,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Github, LinkedIn, Facebook } from "../utils/SVGIcons";
import Account from "./Account";

const Heading = () => {
  const { colorMode } = useColorMode();

  const text = "Web Developer";
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typing = setInterval(() => {
      if (index === text.length) {
        clearInterval(typing);
        return;
      }
      setCurrentText(text.slice(0, index + 1));
      setIndex(index + 1);
    }, 100);
    return () => clearInterval(typing);
  }, [index]);

  return (
    <Box transition="all 0.2s ease-in-out">
      <Stack textAlign="left" lineHeight="shorter">
        <Text
          as="p"
          fontSize="xl"
          textAlign="left"
          fontWeight="semibold"
          color={colorMode === "dark" ? "gray.300" : "blackAlpha.800"}
        >
          Hello, I am
        </Text>
        <Text
          as="h1"
          fontSize={{ base: "5xl", lg: "6xl" }}
          color={colorMode === "dark" ? "teal.400" : "blackAlpha.800"}
          sx={{
            fontWeight: "bold",
            letterSpacing: "wider",
            lineHeight: "shorter",
            textShadow: "5px 1px 4px rgba(0,0,0,0.14)",
          }}
        >
          <Text as="span">NEIL EDWARD</Text>
          <br />
          <Text as="span">DELA CRUZ</Text>
        </Text>
        <Text
          as="h2"
          fontSize="2xl"
          fontWeight="semibold"
          color={colorMode === "dark" ? "gray.300" : "blackAlpha.800"}
        >
          {currentText}
        </Text>
      </Stack>

      <HStack mt={10}>
        <Button
          as="a"
          size="lg"
          color={colorMode === "light" && "white"}
          bgColor={colorMode === "dark" ? "blue.500" : "blue.600"}
          _hover={{ bgColor: "blue.400", transform: "scale(1.1)" }}
          sx={{
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          View Projects
        </Button>

        <HStack mt={6} ps={4}>
          <Account link="https://github.com/neildc14">
            <Github
              boxSize={6}
              color={colorMode === "light" && "blackAlpha.800"}
            />
          </Account>
          <Account link="https://www.linkedin.com/in/neil-dela-cruz-046440206/">
            <LinkedIn
              boxSize={6}
              color={colorMode === "light" && "blackAlpha.800"}
            />
          </Account>
          <Account link="https://www.facebook.com/neiledwarddelacruz14">
            <Facebook
              boxSize={6}
              color={colorMode === "light" && "blackAlpha.800"}
            />
          </Account>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Heading;
