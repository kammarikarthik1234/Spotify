import React, { useContext, useEffect, useState } from "react";
import "./SongItem.css";
import formatDuration from "../../utils/formatDuration";
import { PlayerContext } from "../../context/PlayerContext";
const SongItem = ({ id, track }) => {
  const { name, artist, cover, url } = track;
  const [duration, setDuration] = useState(null);
  const coverImageUrl = `${import.meta.env.VITE_COVER_IMAGE_BASE_URL}/${cover}`;
  const { playWithId } = useContext(PlayerContext);
  useEffect(() => {
    const audio = new Audio(url);
    audio.onloadedmetadata = () => {
      setDuration(audio.duration);
    };
  }, [url]);
  return (
    <div
      onClick={() => playWithId(id)}
      className="song-card text-white flex flex-row justify-between items-center cursor-pointer  pl-6 pr-6"
    >
      <div className="song-content flex flex-row gap-4">
        <div className="song-image-wrapper overflow-hidden relative rounded-full h-14 w-14">
          <img
            src={coverImageUrl}
            alt="Song cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <p className="song-name">{name}</p>
          <p className="artist-name text-base font-extralight">{artist}</p>
        </div>
      </div>
      <div className="duration text-xl font-extralight">
        {formatDuration(duration)}
      </div>
    </div>
  );
};
export default SongItem;
