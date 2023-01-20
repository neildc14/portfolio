import React from "react";
import { Box } from "@chakra-ui/react";
import Avatar from "../components/Avatar";
import Heading from "../components/Heading";

const Banner = () => {
  return (
    <Box height="100vh" mt={14} display="flex" flexDirection="column" gap={12}>
      <Avatar />
      <Heading />
    </Box>
  );
};

export default Banner;
