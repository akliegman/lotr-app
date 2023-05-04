import type { Movie } from "../../../types/movie.type";
import type { Pagination } from "../../../types/pagination.type";

export type MoviesState = {
  data: Movie[];
  pagination: Pagination;
  loading: boolean;
  errors: any;
};
