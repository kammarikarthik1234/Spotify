import React, { useContext, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
import Player from "../Player/Player";
import PlayList from "../PlayList/PlayList";
import { PlayerContext } from "../../context/PlayerContext";
import { useExtractColor } from "react-extract-colors";
import { MdOutlineMenu } from "react-icons/md";
import "./Home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [isPlaylistVisible, setIsPlaylistVisible] = useState(false);
  const { audioRef, track, music } = useContext(PlayerContext);
  const coverImageUrl = `${import.meta.env.VITE_COVER_IMAGE_BASE_URL}/${track?.cover}`;
  const { dominantColor, darkerColor, lighterColor } =
    useExtractColor(coverImageUrl);

  const handleSearch = (query) => {
    setSearch(query);
  };

  const toggleComponentsVisibility = () => {
    console.log("h")
    setIsPlaylistVisible((prev) => !prev);
  };

  return (
    <div
      className="h-screen bg-gray-950 pt-6 relative overflow-auto"
      style={{
        background: `linear-gradient(45deg, ${dominantColor}, ${darkerColor}, ${lighterColor})`,
        transition: "background 2s ease",
      }}
    >
      <div className="flex flex-grow">
        <Sidebar />
        {
          <div className="menu-icon w-2 z-50" onClick={toggleComponentsVisibility}>
            <MdOutlineMenu />
          </div>
        }
        <div className="play-component flex flex-row 2xl:gap-32  xl:gap-32">
          <div
            className={`playlist flex-col gap-7 ml-8 ${isPlaylistVisible ? "visible" : ""}`}
          >
            <Navigation />
            <Search onSearch={handleSearch} />
            {music && <PlayList music={music} search={search} />}
          </div>
          <div>
            {!isPlaylistVisible && music && <Player />}
            <audio ref={audioRef} src={track?.url} preload="auto"></audio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
