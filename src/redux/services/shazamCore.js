// main file for fetching data: api calls:
// from rapidaip:

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9c6b4385a5msh09fcfeb7b6f9b3ap130506jsn800dfd4e2238",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
