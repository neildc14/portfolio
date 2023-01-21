import React from "react";
import { Link, useColorMode } from "@chakra-ui/react";

export const CustomNavLink = ({ link }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Link
      px={2}
      borderRadius="md"
      _hover={{
        bgColor: colorMode === "dark" ? "teal.400" : "teal.200",
        color: colorMode === "dark" ? "gray.300" : "blackAlpha.800",
      }}
    >
      {link}
    </Link>
  );
};
