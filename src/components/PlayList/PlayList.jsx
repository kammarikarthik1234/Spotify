import React, { useContext, useEffect, useState } from "react";
import SongItem from "../SongItem/SongItem";
import { PlayerContext } from "../../context/PlayerContext";
function PlayList({ music, search }) {
  const { activeTab } = useContext(PlayerContext);
  const [isLoaded, setIsLoaded] = useState(false);

  const filteredMusic =
    activeTab === "Top Tracks"
      ? music?.filter((track) => track.top_track)
      : music;
  useEffect(() => {
    const simulate = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoaded(true);
    };

    simulate();
  }, [music]);
  return (
    <div
      className={`transition-opacity duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }
    flex flex-col gap-x.15 transform translate-x-[-24px]`}
    >
      {filteredMusic
        ?.filter((track) => {
          return search.toLowerCase() === ""
            ? track
            : track.name.toLowerCase().includes(search) ||
                track.artist.toLowerCase().includes(search);
        })
        .map((track) => (
          <SongItem key={track.id} id={track.id} track={track} />
        ))}
      ;
    </div>
  );
}

export default PlayList;
