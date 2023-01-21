import Header from "./layouts/Header";
import { Container, Box, useColorMode } from "@chakra-ui/react";
import Banner from "./layouts/Banner";

function App() {
  const { colorMode } = useColorMode();
  return (
    <div className="App">
      <Container
        maxW="full"
        px={0}
        bgColor={colorMode === "dark" ? "blackAlpha.700" : "blue.50"}
      >
        <Header />
        <Banner />
        <Box height="100vh"></Box>
      </Container>
    </div>
  );
}

export default App;
