import { Box } from "@chakra-ui/react";
import React from "react";
import CustomeDivider from "../components/CustomeDivider";
import CustomHeading from "../components/CustomHeading";
import Section from "../components/Section";
import shrinky from "../assets/images/shrinky.png";
import isquizzy from "../assets/images/isquizzy.png";
import recifree from "../assets/images/recifree1.png";
import mailbutler from "../assets/images/mailbutler1.png";

import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <Section id="projects">
      <CustomeDivider />
      <CustomHeading heading="Projects" />
      <Box
        mt={10}
        display="flex"
        flexDirection="column"
        gap={{ base: 8, md: 10 }}
      >
        <ProjectCard
          image={shrinky}
          heading="Shrinky"
          explanation="This web app offers a simple solution to shorten long and complex URLs, making them more manageable and shareable."
          tools={["MongoDB", "Express", "React", "NodeJS", "Charka UI"]}
          link="https://shrinky.netlify.app"
          github="https://github.com/neildc14/shrinky"
        />
        <ProjectCard
          image={isquizzy}
          heading="isQUIZzy"
          explanation="This web app uses the Trivia API to provide multiple choice trivia questions,including both procedurally generated and user generated options."
          tools={["React", "trivia API", "axios"]}
          link="https://isquizzy.netlify.app"
          github="https://github.com/neildc14/quiz-app"
        />
        <ProjectCard
          image={recifree}
          heading="recifree"
          explanation="This project utilizes the EDAMAM Recipe Search API to provide access to millions of web recipes."
          tools={["React", "recipe search API", "axios", "tailwind CSS"]}
          link="https://recifree.netlify.app/"
          github="https://github.com/neildc14/recifree"
        />
        <ProjectCard
          image={mailbutler}
          heading="Mailbutler"
          explanation="Figma design converted to static website"
          tools={["React", "Chakra UI"]}
          link="https://mailbutler.netlify.app/"
          github="https://github.com/neildc14/mailbutler"
        />
      </Box>
    </Section>
  );
};

export default Projects;
