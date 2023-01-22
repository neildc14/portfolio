import { Heading, useColorMode } from "@chakra-ui/react";
import React from "react";

const CustomHeading = ({ heading }) => {
  const { colorMode } = useColorMode();
  return (
    <Heading
      as="h2"
      size="xl"
      mb={2}
      fontWeight="semibold"
      color={colorMode === "dark" ? "gray.300" : "blackAlpha.800"}
    >
      {heading}
    </Heading>
  );
};

export default CustomHeading;
