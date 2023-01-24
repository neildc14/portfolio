import { Heading, useColorMode } from "@chakra-ui/react";
import React from "react";

const CustomHeading = ({ heading, color = "blacAlpha.800" }) => {
  const { colorMode } = useColorMode();
  return (
    <Heading
      as="h2"
      size="xl"
      mb={2}
      fontWeight="semibold"
      color={colorMode === "dark" ? "gray.300" : color}
    >
      {heading}
    </Heading>
  );
};

export default CustomHeading;
