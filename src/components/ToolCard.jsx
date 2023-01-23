import { Card, Heading, Image, useColorMode } from "@chakra-ui/react";
import React from "react";

const ToolCard = ({ type, img }) => {
  const { colorMode } = useColorMode();
  return (
    <Card
      size="sm"
      maxW={40}
      width="90%"
      variant="filled"
      display="grid"
      placeItems="center"
      py={4}
      bgColor={colorMode === "light" && "blue.100"}
      boxShadow="-5px 0px 36px -11px rgba(0,0,0,0.1"
    >
      <Image
        src={img}
        height={{ base: 12, lg: 12 }}
        width={{ lg: "50%" }}
        _hover={{ transform: "scale(2)" }}
        transition="all .5s ease-in-out"
      />
      <Heading
        as="h2"
        size="sm"
        py={2}
        color={colorMode === "dark" ? "gray.300" : "blackAlpha.800"}
      >
        {type}
      </Heading>
    </Card>
  );
};

export default ToolCard;
