import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Navbar />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
