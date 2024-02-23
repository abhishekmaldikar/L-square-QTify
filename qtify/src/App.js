import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { getTopAlbums, getNewAlbums ,getSongs } from "./api/fetchAlbums";
import HomePage from "./pages/HomePage/HomePage";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});

  async function dataSetter(key, source) {
    const response = await source();
    setData((prev) => ({
      ...prev,
      [key]: response,
    }));
  }

  useEffect(() => {
    dataSetter("topSongs", getTopAlbums);
    dataSetter("newSongs", getNewAlbums);
    dataSetter("songs", getSongs);
  }, []);

  const { topSongs = [], newSongs = [], songs = [] } = data;
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Hero />
        <HomePage topSongs={topSongs} newSongs={newSongs} songs={songs}/>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
