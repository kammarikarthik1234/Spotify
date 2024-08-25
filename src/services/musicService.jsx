const URL = "https://cms.samespace.com/items/songs";
const getMusic = () => {
  return fetch(URL)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Error fetching music:", error);
      return [];
    });
};
export default getMusic;
