import "./App.css";

import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Products from "./components/Products";
import Notifyme from "./components/Notifyme";
import { ChakraProvider, Box, VStack } from "@chakra-ui/react";
import Community from "./components/Community";
function App() {
  return (
    <ChakraProvider>
      <main className="Main">
        <Header />
        <VStack>
          <LandingSection />
          <Products />
          <Notifyme />
          <Community />
          <Box id="about-section" w="full" h="1080px" bg={"White"}></Box>
        </VStack>
      </main>
    </ChakraProvider>
  );
}

export default App;
