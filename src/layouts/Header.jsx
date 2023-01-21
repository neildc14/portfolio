import React from "react";
import {
  Box,
  Divider,
  useColorMode,
  useMediaQuery,
  Link,
  Image,
  Text,
} from "@chakra-ui/react";
import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";
import logo from "../assets/icons/logo.png";

const Header = () => {
  const { colorMode } = useColorMode();
  const [isMediumSize] = useMediaQuery("(min-width: 40rem)");
  return (
    <Box bgColor={colorMode === "dark" ? "#1a202c" : "blue.100"}>
      <Box as="header" maxW="5xl" mx="auto" height={16} py={4} px={6}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Link
            href="/"
            display="flex"
            alignItems="cente"
            _hover={{ textDecoration: "none" }}
          >
            <Image src={logo} alt="this is a logo of the website" />
            {isMediumSize && (
              <Text
                fontWeight="semibold"
                fontSize="lg"
                color={colorMode === "dark" && "gray.300"}
              >
                @neildelacruz
              </Text>
            )}
          </Link>
          {isMediumSize ? <DesktopNav /> : <MobileNav />}
        </Box>

        <Divider mt={2} />
      </Box>
    </Box>
  );
};

export default Header;
