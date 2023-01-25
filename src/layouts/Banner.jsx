import React, { useEffect, useState } from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import Avatar from "../components/Avatar";
import Heading from "../components/Heading";

const Banner = () => {
  const { colorMode } = useColorMode();
  const [animate, setAnimation] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setAnimation("flip-left");
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Box
      id="profile"
      width="100%"
      mx="auto"
      borderRadius={{
        base: "0% 54% 50% 50% / 10% 0% 16% 16% ",
        md: "0% 54% 33% 67% / 10% 0% 16% 29% ",
        lg: "0% 43% 34% 72% / 47% 0% 88% 30%   ",
      }}
      bgColor={colorMode === "dark" ? "#1a202c" : "blue.100"}
    >
      <Box
        height={{ base: "90vh", md: "85vh" }}
        px={6}
        maxW="5xl"
        mx="auto"
        display="flex"
        flexDirection={{ base: "column", md: "row-reverse" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={{ md: "center" }}
        gap={12}
      >
        {!isLoading && (
          <>
            <div data-aos={animate}>
              <Avatar />
            </div>
            <Heading />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Banner;
