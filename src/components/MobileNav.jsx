import React from "react";
import {
  Box,
  IconButton,
  useColorMode,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { DarkModeIcon, LightModeIcon, HamburgerIcon } from "../utils/SVGIcons";
import { CustomNavLink } from "./CustomLink";

const MobileNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box zIndex={2000000}>
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
      <IconButton
        icon={<HamburgerIcon boxSize={6} />}
        variant="ghost"
        onClick={isOpen ? onClose : onOpen}
      />

      <Drawer
        zIndex={2000000}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bgColor={colorMode === "light" && "blue.100"}>
          <DrawerBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={10}
            fontSize="xl"
            fontWeight="semibold"
            width="100%"
          >
            <CustomNavLink
              link="Profile"
              path="#profile"
              py={2}
              onClick={onClose}
            />
            <CustomNavLink
              link="About"
              path="#about"
              py={2}
              onClick={onClose}
            />
            <CustomNavLink
              link="Skills"
              path="#skills"
              py={2}
              onClick={onClose}
            />
            <CustomNavLink
              link="Projects"
              path="#projects"
              py={2}
              onClick={onClose}
            />
            <CustomNavLink
              link="Contact"
              path="#contact"
              py={2}
              onClick={onClose}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileNav;
