import { createContext, useRef, useState, useEffect } from "react";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children, music }) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const [track, setTrack] = useState();
  const [activeTab, setActiveTab] = useState("For You");
  const [isMuted, setIsMuted] = useState(false);
  useEffect(() => {
    if (Array.isArray(music) && music.length > 0) {
      setTrack(music[0]); // Set the first song as the initial track
    }
  }, [music]);

  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });
  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
      };
    });
  });
  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };
  const playWithId = async (id) => {
    const filteredMusic =
      activeTab === "Top Tracks"
        ? music.filter((song) => song.top_track)
        : music;
    const index = filteredMusic.findIndex((song) => song.id === id);
    await setTrack(filteredMusic[index]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const previous = async () => {
    if (!track) {
      return;
    }
    const filteredMusic =
      activeTab === "Top Tracks"
        ? music.filter((song) => song.top_track)
        : music;
    const index = filteredMusic.findIndex((song) => song.id === track.id);
    if (index > 0) {
      await setTrack(filteredMusic[index - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };
  const next = async () => {
    if (!track) {
      return;
    }
    const filteredMusic =
      activeTab === "Top Tracks"
        ? music.filter((song) => song.top_track)
        : music;
    const index = filteredMusic.findIndex((song) => song.id === track.id);
    if (index < filteredMusic.length - 1) {
      await setTrack(filteredMusic[index + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };
  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };
  const toggleSound = async () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };
  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    music,
    playWithId,
    previous,
    next,
    seekSong,
    activeTab,
    setActiveTab,
    toggleSound,
    isMuted,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;
