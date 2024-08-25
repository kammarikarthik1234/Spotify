import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import getMusic from "./services/musicService";
import PlayerContextProvider from "./context/PlayerContext";
const App = () => {
  const [music, setMusic] = useState(null);
  useEffect(() => {
    const fetchMusic = async () => {
      await getMusic().then((music) => {
        setMusic(music);
      });
    };
    fetchMusic();
  }, []);
  return (
    <Router>
      <PlayerContextProvider music={music?.data}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PlayerContextProvider>
    </Router>
  );
};
export default App;
