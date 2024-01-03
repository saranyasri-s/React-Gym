export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "2a0eb500b8msh973762489f475d4p1f45bejsn24902d08d008",
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
