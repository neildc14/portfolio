import React from "react";
import { Link, useColorMode } from "@chakra-ui/react";

export const CustomNavLink = ({ link, path, px = 2, py = 0 }) => {
  const { colorMode } = useColorMode();
  return (
    <Link
      href={path}
      width="100%"
      px={px}
      py={py}
      borderRadius="md"
      _hover={{
        bgColor: colorMode === "dark" ? "teal.400" : "teal.200",
        color: colorMode === "dark" ? "gray.300" : "blackAlpha.800",
      }}
      textAlign="center"
    >
      {link}
    </Link>
  );
};
