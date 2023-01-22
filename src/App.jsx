import Header from "./layouts/Header";
import { Container, Box, useColorMode } from "@chakra-ui/react";
import Banner from "./layouts/Banner";
import About from "./layouts/About";
import Skills from "./layouts/Skills";

function App() {
  const { colorMode } = useColorMode();
  return (
    <div className="App">
      <Container
        maxW="full"
        height="100%"
        px={0}
        bgColor={colorMode === "dark" ? "blackAlpha.400" : "blue.50"}
      >
        <Header />
        <Banner />
        <About />
      </Container>
    </div>
  );
}

export default App;
