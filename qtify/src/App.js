import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Hero />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
