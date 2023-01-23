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
      <IconButton
        icon={<HamburgerIcon boxSize={6} />}
        variant="ghost"
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bgColor={colorMode === "light" && "blue.100"}>
          <DrawerCloseButton />
          <DrawerHeader>@neildelacruz</DrawerHeader>

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
            <CustomNavLink link="Profile" py={2} />
            <CustomNavLink link="About" py={2} />
            <CustomNavLink link="Skills" py={2} />
            <CustomNavLink link="Projects" py={2} />
            <CustomNavLink link="Contact" py={2} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileNav;
