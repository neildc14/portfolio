import React from "react";
import { AspectRatio, Image, Center, Box } from "@chakra-ui/react";
import avatar from "../assets/images/avatar.png";
const Avatar = () => {
  return (
    <Box>
      <Center>
        <Image
          src={avatar}
          alt="profile picture"
          objectFit="contain"
          height="200px"
        />
      </Center>
    </Box>
  );
};

export default Avatar;
