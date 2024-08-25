import React, { useState } from "react";
import "./Search.css";
import { IoSearch } from "react-icons/io5";
const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSearch = () => {
    onSearch(query);
  };
  return (
    <div className="search-box rounded-md  px-5   shadow-sm   sm:text-sm flex flex-row overflow-hidden items-center text-zinc-500 gap-2">
      <input
        className="input-search focus:outline-none text-xl bg-inherit w-96"
        placeholder="Search Song, Artist"
        type="text"
        name="search"
        onChange={handleChange}
        value={query}
      />
      <IoSearch onClick={handleSearch} className="search-icon cursor-pointer" />
    </div>
  );
};
export default Search;
