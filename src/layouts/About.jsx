import { Box, useColorMode, Image } from "@chakra-ui/react";
import aboutme from "../assets/images/aboutme.png";
import AboutText from "../components/AboutText";
import CustomeDivider from "../components/CustomeDivider";
import CustomHeading from "../components/CustomHeading";
import Section from "../components/Section";

const About = () => {
  const { colorMode } = useColorMode();
  return (
    <Section id="about">
      <CustomeDivider />
      <CustomHeading heading="About" />
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <div data-aos="flip-left" style={{ overflowX: "hidden !important" }}>
          <Image src={aboutme} width="100%" maxW="sm" />
        </div>
        <div data-aos="flip-right" style={{ overflowX: "hidden !important" }}>
          <Box
            maxW="3xl"
            p={6}
            display="grid"
            placeItems="center"
            borderRadius="md"
            color="gray.300"
            boxShadow="-5px 0px 36px -11px rgba(0,0,0,0.1)"
            bgColor={colorMode === "dark" ? "#1a202c" : "blue.200"}
          >
            <AboutText
              text=" I am a full-stack web developer who is enthusiastic about designing and developing
            interactive and captivating user experiences . I am dedicated to
            creating dynamic and engaging user experiences through my web
            development skills."
            />
            <AboutText text=" I am a recent graduate with a Bachelor of Science in Information Technology (BSIT). Having successfully completed my internship, I am now actively seeking full-time opportunities in the workforce as a web developer. Throughout my academic journey, I have honed my skills and gained valuable experience, making me well-prepared to contribute to the development of cutting-edge web solutions. I am enthusiastic about joining a dynamic team and making a positive impact in the field of IT." />
          </Box>
        </div>
      </Box>
    </Section>
  );
};

export default About;
