import Header from "./layouts/Header";
import { Container } from "@chakra-ui/react";
import Avatar from "./components/Avatar";
import Banner from "./layouts/Banner";

function App() {
  return (
    <div className="App">
      <Container maxW="1260px" mx="auto" px={6}>
        <Header />
        <Banner />
      </Container>
    </div>
  );
}

export default App;
