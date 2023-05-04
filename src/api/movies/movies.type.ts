import { Movie } from "../../types/movie.type";

export type MoviesPayload = {
  docs: Movie[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};
