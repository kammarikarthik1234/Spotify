import React, { useContext } from "react";
import "./Player.css";
import { FaPlayCircle, FaPauseCircle, FaVolumeMute } from "react-icons/fa";
import { IoPlayBackSharp, IoPlayForwardSharp } from "react-icons/io5";
import { HiSpeakerWave } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { PlayerContext } from "../../context/PlayerContext";
function Player() {
  const {
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    track,
    previous,
    next,
    seekSong,
    toggleSound,
    isMuted,
  } = useContext(PlayerContext);
  const coverImageUrl = `${import.meta.env.VITE_COVER_IMAGE_BASE_URL}/${
    track?.cover
  }`;
  return (
    <div className="player  mt-20 mr-20  box-border max-w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-4xl font-semibold">{track?.name}</h1>
        <p className="album-name text-lg">{track?.artist}</p>
      </div>
      <div className="song-image-wrapper mt-4 ">
        <img
          src={coverImageUrl}
          className="w-full h-full max-w-full object-cover"
        />
      </div>
      <div
        ref={seekBg}
        onClick={seekSong}
        className="seekbar bg-gray-600 rounded-full cursor-pointer mt-6"
      >
        <hr
          ref={seekBar}
          className="h-2 border-none w-0 bg-white rounded-full"
        />
      </div>
      <div className="play-controls flex mt-6 justify-between">
        <div className="flex items-center justify-center rounded-full bg-gray-800 w-12 h-12">
          <BsThreeDots className="text-white text-2xl cursor-pointer" />
        </div>
        <div className="flex items-center gap-11">
          <IoPlayBackSharp
            onClick={previous}
            className="text-white text-3xl cursor-pointer"
          />
          {playStatus ? (
            <FaPauseCircle
              onClick={pause}
              className="text-white text-5xl cursor-pointer"
            />
          ) : (
            <FaPlayCircle
              onClick={play}
              className="text-white text-5xl cursor-pointer"
            />
          )}
          <IoPlayForwardSharp
            onClick={next}
            className="text-white text-3xl cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-center rounded-full bg-gray-800 w-12 h-12">
          {isMuted ? (
            <FaVolumeMute
              onClick={toggleSound}
              className="text-white text-xl cursor-pointer"
            />
          ) : (
            <HiSpeakerWave
              onClick={toggleSound}
              className="text-white text-xl cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Player;
