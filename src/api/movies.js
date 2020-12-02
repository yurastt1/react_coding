const BASE_URL = `http://www.omdbapi.com/?apikey=287c70f0&t=`;

export async function getMoviesByTitle(title) {
  const response = await fetch(`${BASE_URL}${title}`);

  return response.json();
}
