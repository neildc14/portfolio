import {
  Box,
  Card,
  CardHeader,
  Divider,
  Heading,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../components/CustomHeading";
import Section from "../components/Section";
import CustomeDivider from "../components/CustomeDivider";
import ToolCard from "../components/ToolCard";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import javascript from "../assets/icons/javascript.png";
import node from "../assets/icons/node.png";
import express from "../assets/icons/express.png";
import mysql from "../assets/icons/mysql.png";
import react from "../assets/icons/react.png";
import chakraui from "../assets/icons/chakraui.png";
import tailwind from "../assets/icons/tailwind.png";
import bootstrap from "../assets/icons/bootstrap.png";
import mongodb from "../assets/icons/mongodb.png";

const Skills = () => {
  const { colorMode } = useColorMode();

  return (
    <Section id="skills">
      <CustomeDivider />
      <CustomHeading heading="Skills" />
      <Text
        as="h3"
        fontSize="lg"
        fontWeight="semibold"
        color={colorMode === "dark" ? "gray.300" : "blackAlpha.700"}
      >
        I am particularly skilled in utilizing these technologies:
      </Text>

      <Card
        variant="outline"
        mt={10}
        p={{ base: 4, md: 6 }}
        bgColor={colorMode === "light" && "blue.50"}
      >
        <CardHeader p={0}>
          <Heading
            as="h4"
            size="lg"
            fontWeight="regular"
            mb={2}
            color={colorMode === "dark" ? "blue.400" : "blackAlpha.500"}
          >
            Frontend Development
          </Heading>
          <Divider />
        </CardHeader>

        <SimpleGrid
          mt={10}
          columns={{ base: 2, md: 4, lg: 6 }}
          placeItems="center"
          spacing={10}
        >
          <ToolCard type="HTML" img={html} />
          <ToolCard type="CSS" img={css} />
          <ToolCard type="JavaScript" img={javascript} />
          <ToolCard type="React JS" img={react} />{" "}
          <ToolCard type="Chakra UI" img={chakraui} />
          <ToolCard type="Tailwind CSS" img={tailwind} />
          <ToolCard type="Bootstrap" img={bootstrap} />
        </SimpleGrid>
      </Card>

      <Card
        variant="outline"
        mt={10}
        p={{ base: 4, md: 6 }}
        bgColor={colorMode === "light" && "blue.50"}
      >
        <CardHeader p={0}>
          <Heading
            as="h4"
            size="lg"
            fontWeight="regular"
            mb={2}
            color={colorMode === "dark" ? "blue.400" : "blackAlpha.500"}
          >
            Backend Development
          </Heading>
          <Divider />
        </CardHeader>

        <SimpleGrid
          mt={10}
          columns={{ base: 2, md: 4, lg: 6 }}
          placeItems="center"
          spacing={10}
        >
          <ToolCard type="Node JS" img={node} />
          <ToolCard type="Express" img={express} />
          <ToolCard type="MongoDB" img={mongodb} />
          <ToolCard type="My SQL" img={mysql} />
        </SimpleGrid>
      </Card>

      <Box pb={20}></Box>
    </Section>
  );
};

export default Skills;
