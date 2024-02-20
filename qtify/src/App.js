import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AlbumsSection from "./components/Section/AlbumsSection";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Hero />
        <AlbumsSection/>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
