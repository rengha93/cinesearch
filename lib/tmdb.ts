const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const options = {
  headers: {
    Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
  },
};

export async function getTrending() {
  try {
    const res = await fetch(`${BASE_URL}/trending/movie/week`, options);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Trending failed:", error);
    return [];
  }
}

export async function searchMovies(query: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`,
      options,
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Search failed:", error);
    return [];
  }
}

export async function getMovieDetails(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/movie/${id}`, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Movie details failed:", error);
    return null;
  }
}

export { IMAGE_BASE_URL };
