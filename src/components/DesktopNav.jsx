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
      color={colorMode === "dark" && "gray.300"}
    >
      <Link>Profile</Link>
      <Link>Skills</Link>
      <Link>Project</Link>
      <Link>Education</Link>
      <Link>Contact Me</Link>
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
        color={colorMode === "dark" && "gray.300"}
      />
    </Stack>
  );
};

export default DesktopNav;
