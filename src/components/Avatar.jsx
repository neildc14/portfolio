import React from "react";
import { Image, Center, Box } from "@chakra-ui/react";
import avatar from "../assets/images/avatar.png";
const Avatar = () => {
  return (
    <Box>
      <Center>
        <Image
          src={avatar}
          alt="profile picture"
          objectFit="contain"
          height={{ base: "200px", md: "100%" }}
          maxHeight="400px"
          _hover={{ transform: "scale(1.05)" }}
          sx={{ transition: "all 0.2s ease-in-out" }}
        />
      </Center>
    </Box>
  );
};

export default Avatar;
