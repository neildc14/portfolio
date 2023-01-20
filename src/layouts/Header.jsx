import React from "react";
import { Box, Divider } from "@chakra-ui/react";
import MobileHeader from "../components/MobileNav";

const Header = () => {
  return (
    <Box as="header" height={16} py={4}>
      <MobileHeader />
      <Divider mt={2} />
    </Box>
  );
};

export default Header;
