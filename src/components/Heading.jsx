import React from "react";
import {
  Box,
  Stack,
  Text,
  HStack,
  Spacer,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Github, LinkedIn, Facebook } from "../utils/SVGIcons";
import Account from "./Account";

const Heading = () => {
  const { colorMode } = useColorMode();
  return (
    <Box>
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
          fontSize="5xl"
          fontWeight="bold"
          letterSpacing="wider"
          lineHeight="shorter"
          color={colorMode === "dark" ? "teal.400" : "blackAlpha.800"}
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
          Web Developer
        </Text>
      </Stack>

      <HStack mt={10}>
        <Button
          as="a"
          size="lg"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          color={colorMode === "light" && "white"}
          bgColor={colorMode === "dark" ? "blue.500" : "blue.600"}
          _hover={{ bgColor: "blue.400" }}
          sx={{ cursor: "pointer" }}
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
