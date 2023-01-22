import {
  Heading,
  Box,
  Text,
  Divider,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import aboutme from "../assets/images/aboutme.png";

const About = () => {
  const { colorMode } = useColorMode();
  return (
    <Box as="section" id="about" mt={16} px={6} maxW="5xl" mx="auto" >
      <Divider
        borderWidth="1px"
        borderStyle="solid"
        borderColor="teal.400"
        mb={4}
      />
      <Heading
        as="h2"
        size="xl"
        mb={2}
        fontWeight="semibold"
        color={colorMode === "dark" ? "gray.300" : "blackAlpha.800"}
      >
        About
      </Heading>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src={aboutme} width="100%" maxW="sm" />

        <Box
          maxW="3xl"
          p={6}
          display="grid"
          placeItems="center"
          borderRadius="md"
          color="gray.300"
          boxShadow="0px 10px 35px -3px rgba(0,0,0,0.1);"
          bgColor={colorMode === "dark" ? "#1a202c" : "blue.100"}
        >
          <Text
            as="p"
            textAlign="justify"
            fontSize="lg"
            fontWeight="semibold"
            lineHeight="tall"
            textIndent={52}
            bgGradient={
              colorMode === "dark"
                ? "linear(to-r, #90CDF4, #3182CE)"
                : "linear(to-r, blackAlpha.700, blackAlpha.800)"
            }
            bgClip="text"
          >
            I am a full-stack web developer who is enthusiastic about designing
            interactive and captivating user experiences. I am dedicated to
            creating dynamic and engaging user experiences through my web
            development skills.
          </Text>
          <Text
            as="p"
            pt={4}
            textAlign="justify"
            lineHeight="tall"
            fontSize="lg"
            fontWeight="semibold"
            textIndent={52}
            bgGradient={
              colorMode === "dark"
                ? "linear(to-r, #90CDF4, #3182CE)"
                : "linear(to-r, blackAlpha.700, blackAlpha.800)"
            }
            bgClip="text"
          >
            I am currently a fourth-year graduating student of Bachelor of
            Science in Information Technology (BSIT). I am in the final stages
            of my studies and am preparing to enter the workforce as an intern
            web developer.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
