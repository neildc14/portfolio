import { Box, Text, useColorMode } from "@chakra-ui/react";
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
import git from "../assets/icons/git.png";
import github from "../assets/icons/github.png";
import figma from "../assets/icons/figma.png";
import SkillCard from "../components/SkillCard";

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

      <SkillCard heading="Frontend Development">
        <ToolCard type="HTML" img={html} />
        <ToolCard type="CSS" img={css} />
        <ToolCard type="JavaScript" img={javascript} />
        <ToolCard type="React JS" img={react} />{" "}
        <ToolCard type="Chakra UI" img={chakraui} />
        <ToolCard type="Tailwind CSS" img={tailwind} />
        <ToolCard type="Bootstrap" img={bootstrap} />
      </SkillCard>
      <SkillCard heading="Backend Development">
        <ToolCard type="Node JS" img={node} />
        <ToolCard type="Express" img={express} />
        <ToolCard type="MongoDB" img={mongodb} />
        <ToolCard type="My SQL" img={mysql} />
      </SkillCard>
      <SkillCard heading="Others">
        <ToolCard type="Git" img={git} />
        <ToolCard type="Github" img={github} />
        <ToolCard type="Figma" img={figma} />
      </SkillCard>
    </Section>
  );
};

export default Skills;
