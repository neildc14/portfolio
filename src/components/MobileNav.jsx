import React from "react";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { DarkModeIcon, LightModeIcon, HamburgerIcon } from "../utils/SVGIcons";

const MobileNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <IconButton
        icon={
          colorMode === "light" ? (
            <DarkModeIcon boxSize={6} />
          ) : (
            <LightModeIcon boxSize={6} />
          )
        }
        variant="ghost"
        onClick={toggleColorMode}
      />
      <IconButton icon={<HamburgerIcon boxSize={6} />} variant="ghost" />
    </Box>
  );
};

export default MobileNav;
