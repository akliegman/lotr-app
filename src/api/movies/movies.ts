import { api } from "../api";

import type { AxiosError } from "axios";
import type { MoviesPayload } from "./movies.type";

export const moviesApi = () => {
  const getMovies: () => Promise<MoviesPayload | AxiosError> = async () => {
    try {
      const response = await api.get("/movie", {
        params: {
          limit: 5000,
        },
      });
      return response.data;
    } catch (error: AxiosError | any) {
      throw error;
    }
  };

  return {
    getMovies,
  };
};
