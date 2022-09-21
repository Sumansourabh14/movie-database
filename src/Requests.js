const API_KEY = "4dff114364cc0c22d04c95af2496e25c";

export const backdrop_URL = "https://image.tmdb.org/t/p/original";
export const backdrop_URL_Small = "https://image.tmdb.org/t/p/w500";

const API_REQUESTS = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    requestTopUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
}

export default API_REQUESTS;