export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "3b53973530msh2a672067ccec5b2p143a8fjsna0574626113b",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeSearchOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "a991470259mshae1997362f27b5bp1f9953jsnbed0e2eb675d",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
