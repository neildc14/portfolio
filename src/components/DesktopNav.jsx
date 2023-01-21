import React from "react";
import { Stack, Link, IconButton, useColorMode } from "@chakra-ui/react";
import { DarkModeIcon, LightModeIcon } from "../utils/SVGIcons";

const DesktopNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack
      direction="row"
      spacing={4}
      align="center"
      fontWeight="semibold"
      color={colorMode === "dark" ? "gray.300" : "blackAlpha.800"}
    >
      <Link>Profile</Link>
      <Link>Skills</Link>
      <Link>Project</Link>
      <Link>Education</Link>
      <Link>Contact</Link>
      <IconButton
        icon={
          colorMode === "light" ? (
            <DarkModeIcon boxSize={6} />
          ) : (
            <LightModeIcon boxSize={6} />
          )
        }
        variant="ghost"
        color={colorMode === "dark" ? "gray.300" : "blackAlpha.800"}
        onClick={toggleColorMode}
      />
    </Stack>
  );
};

export default DesktopNav;
