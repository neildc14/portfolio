import { Box } from "@chakra-ui/react";
import React from "react";

const Section = ({ id, children }) => {
  return (
    <Box as="section" id={id} mt={16} px={6} maxW="5xl" mx="auto">
      {children}
    </Box>
  );
};

export default Section;
