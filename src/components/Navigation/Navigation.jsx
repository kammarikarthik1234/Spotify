import React, { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";

function Navigation() {
  const { activeTab, setActiveTab } = useContext(PlayerContext);
  return (
    <div>
      <div className="flex items-center gap-8 mt-4">
        <p
          onClick={() => setActiveTab("For You")}
          className={`font-medium text-2xl cursor-pointer ${
            activeTab === "For You" ? "text-white" : "text-gray-500"
          }`}
        >
          For You
        </p>
        <p
          onClick={() => setActiveTab("Top Tracks")}
          className={`font-medium text-2xl cursor-pointer ${
            activeTab === "Top Tracks" ? "text-white" : "text-gray-500"
          }`}
        >
          Top Tracks
        </p>
      </div>
    </div>
  );
}

export default Navigation;
