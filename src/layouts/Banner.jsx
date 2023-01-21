import React from "react";
import { Box, useColorMode, Image } from "@chakra-ui/react";
import Avatar from "../components/Avatar";
import Heading from "../components/Heading";

const Banner = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      width="100%"
      mx="auto"
      pt={14}
      borderRadius={{
        base: "0% 54% 50% 50% / 10% 0% 16% 16% ",
        md: "0% 54% 33% 67% / 10% 0% 16% 29% ",
      }}
      bgColor={colorMode === "dark" ? "#1a202c" : "blue.100"}
    >
      <Box
        height={{ base: "85vh", md: "80vh" }}
        px={6}
        maxW="5xl"
        mx="auto"
        display="flex"
        flexDirection="column"
        gap={12}
      >
        <Avatar />
        <Heading />
      </Box>
    </Box>
  );
};

export default Banner;
