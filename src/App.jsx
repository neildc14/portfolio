import React from "react";
import Header from "./layouts/Header";
import { Container, useColorMode } from "@chakra-ui/react";
import Banner from "./layouts/Banner";
import About from "./layouts/About";
import Skills from "./layouts/Skills";
import Projects from "./layouts/Projects";
import Contact from "./layouts/Contact";
import Footer from "./layouts/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./layouts/Services";
import NoteWothyProjects from "./layouts/NoteWothyProjects";

function App() {
  const { colorMode } = useColorMode();

  React.useEffect(() => {
    AOS.init();
  });

  return (
    <div className="App">
      <Container
        position="sticky"
        top={-1}
        zIndex={100000}
        maxW="full"
        height="100%"
        px={0}
        bgColor={colorMode === "dark" ? "blackAlpha.400" : "blue.50"}
      >
        <Header />
      </Container>
      <Container
        maxW="full"
        height="100%"
        px={0}
        pb={16}
        bgColor={colorMode === "dark" ? "blackAlpha.400" : "blue.50"}
      >
        <Banner />
        <About />
      </Container>
      <Container
        maxW="full"
        px={0}
        pb={{ base: 32, md: 48 }} //changed for overflow
        // boxShadow="inset 0px -80px 100px -4px rgba(0,0,0,0.1)"
        bgGradient={
          colorMode === "light" &&
          "linear(teal.50 0%, teal.100 25%, blue.200 50%)"
        }
      >
        <Skills />
      </Container>
      <Container
        height={{ base: "100vh", md: "40vh" }}
        maxW="full"
        px={0}
        mb={32}
      >
        <Services />
      </Container>
      <Container
        maxW="full"
        px={0}
        pb={16}
        bgColor={colorMode === "dark" ? "blackAlpha.400" : "blue.200"}
        boxShadow="inset 0px -80px 100px -4px rgba(0,0,0,0.1)"
        bgGradient={
          colorMode === "light" &&
          "linear(blue.50 0%, blue.200 25%,  blue.400 100%)"
        }
      >
        <Projects />
      </Container>
      <Container
        maxW="full"
        px={0}
        pb={16}
        bgColor={colorMode === "dark" ? "blackAlpha.400" : "gray.50"}
        boxShadow="inset 0px -80px 100px -4px rgba(0,0,0,0.1)"
      >
        <Contact />
      </Container>
      <Container maxW="full" px={0} bgColor="blackAlpha.900">
        <Footer />
      </Container>
    </div>
  );
}

export default App;
