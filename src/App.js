import { Dashboard } from "./components/Dashboard";
import "./App.css";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { Header } from "./components/common/Header";
import { theme } from "./theme/theme";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Header />
        <Container maxW="container.lg" position="relative">
          <Dashboard />
        </Container>
      </ChakraProvider>
    </div>
  );
}

export default App;
