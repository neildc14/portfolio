import React from "react";
import { Box, Heading, Image, Icon } from "@chakra-ui/react";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";

const Skills = () => {
  return (
    <Box as="section" mt={16} px={6} maxW="5xl" mx="auto" pb="100px">
      <Heading as="h2" size="xl" letterSpacing="wider">
        Skills
      </Heading>
      <Box mt={6}></Box>
    </Box>
  );
};

export default Skills;
