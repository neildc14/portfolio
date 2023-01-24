import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/icons/logo.png";
const Footer = () => {
  return (
    <Box as="footer" height="10vh" display="grid" placeItems="center">
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap={4}
      >
        <Image src={logo} boxSize={8} />
        <Text fontSize="md" fontWeight="semibold" color="white">
          Neil Edward Dela Cruz ◉ 2023
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
