import Header from "./layouts/Header";
import { Container, useColorMode } from "@chakra-ui/react";
import Banner from "./layouts/Banner";
import About from "./layouts/About";
import Skills from "./layouts/Skills";
import Projects from "./layouts/Projects";
import Contact from "./layouts/Contact";

function App() {
  const { colorMode } = useColorMode();
  return (
    <div className="App">
      <Container
        maxW="full"
        height="100%"
        px={0}
        pb={16}
        bgColor={colorMode === "dark" ? "blackAlpha.400" : "blue.50"}
      >
        <Header />
        <Banner />
        <About />
      </Container>
      <Container maxW="full" px={0} pb={16}>
        <Skills />
      </Container>
      <Container
        maxW="full"
        px={0}
        pb={16}
        bgColor={colorMode === "dark" ? "blackAlpha.400" : "blue.200"}
      >
        <Projects />
      </Container>
      <Container
        maxW="full"
        px={0}
        pb={16}
        bgColor={colorMode === "dark" ? "blackAlpha.400" : "blue.600"}
      >
        <Contact />
      </Container>
    </div>
  );
}

export default App;
