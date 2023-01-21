import React from "react";
import { Stack, Link, IconButton, useColorMode } from "@chakra-ui/react";
import { DarkModeIcon, LightModeIcon } from "../utils/SVGIcons";
import { CustomNavLink } from "./CustomLink";

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
      <CustomNavLink link="Profile" />
      <CustomNavLink link="Skills" />
      <CustomNavLink link="Projects" />
      <CustomNavLink link="Education" />
      <CustomNavLink link="Contact" />

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
        _hover={{ bgColor: colorMode === "dark" ? "teal.400" : "teal.200" }}
        onClick={toggleColorMode}
      />
    </Stack>
  );
};

export default DesktopNav;
