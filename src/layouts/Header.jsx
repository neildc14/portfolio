import React from "react";
import { Box, Divider, useColorMode } from "@chakra-ui/react";
import MobileHeader from "../components/MobileNav";

const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <Box bgColor={colorMode === "dark" ? "#1a202c" : "blue.100"}>
      <Box as="header" maxW="1260px" mx="auto" height={16} py={4} px={6}>
        <MobileHeader />
        <Divider mt={2} />
      </Box>
    </Box>
  );
};

export default Header;
