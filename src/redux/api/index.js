import axios from 'axios';

const API = 'https://api.jikan.moe/v4/anime';

export const getAnimeByQuery = (query, page) =>
  axios.get(API + `?q=${query}&limit=16&page=${page}`);
