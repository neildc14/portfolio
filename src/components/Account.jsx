import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";

const Account = ({ link, size = "lg", children }) => {
  const { colorMode } = useColorMode();
  return (
    <IconButton
      as="a"
      href={link}
      icon={children}
      size={size}
      variant="solid"
      borderRadius="full"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      bgColor={colorMode === "dark" ? "gray.500" : "gray.300"}
      _hover={{ bgColor: "blue.400", transform: "scale(1.1)" }}
      _active={{ bgColor: "blue.400" }}
      transition="all 0.2s ease-in-out"
      cursor="pointer"
    />
  );
};

export default Account;
