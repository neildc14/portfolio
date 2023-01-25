import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import CustomeDivider from "../components/CustomeDivider";
import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import frontend from "../assets/icons/frontend.png";
import backend from "../assets/icons/backend.png";
import web_design from "../assets/icons/web_design.png";

const Services = () => {
  const { colorMode } = useColorMode();
  return (
    <div data-aos="zoom-in-up">
      <Section>
        <Box position="relative">
          <Center>
            <Card
              size="lg"
              position="absolute"
              top={-40}
              zIndex={1}
              width="100%"
              bgColor={colorMode === "dark" ? "blue.900" : "blue.600"}
              boxShadow="0px 11px 3px -3px rgba(0,0,0,0.1)"
            >
              <CardHeader>
                <Center>
                  <Heading
                    as="h3"
                    size="xl"
                    fontWeight="semibold"
                    color={colorMode === "dark" ? "gray.300" : "white"}
                  >
                    What I can Provide?
                  </Heading>
                </Center>
                <CustomeDivider />
              </CardHeader>
              <CardBody
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                justifyContent="space-evenly"
                gap={10}
              >
                <div data-aos="flip-left">
                  <ServiceCard
                    img={frontend}
                    heading="Frontend Development"
                    intro="I am proficient in using HTML, CSS, UI frameworks, and JavaScript frameworks, particularly ReactJS, to develop the front-end for websites and web-app"
                  />
                </div>
                <div data-aos="flip-left">
                  <ServiceCard
                    img={backend}
                    heading="Backend Development"
                    intro="I Skilled in using NodeJS, Express, MongodDB to provide high-quality backend development services."
                  />
                </div>
                <div data-aos="flip-left">
                  <ServiceCard
                    img={web_design}
                    heading="Web Design"
                    intro="I am profecient in web design using Figma for professional and visually appealing services."
                  />
                </div>
              </CardBody>
            </Card>
          </Center>
        </Box>
      </Section>
    </div>
  );
};

export default Services;
