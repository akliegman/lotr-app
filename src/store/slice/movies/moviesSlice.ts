import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

import { moviesApi } from "../../../api/movies/movies";
import { paginationConfig } from "../../../config/paginationConfig";

import { AxiosError } from "axios";
import type { RootState } from "../../store.type";
import type { MoviesPayload } from "../../../api/movies/movies.type";
import type { MoviesState } from "./moviesSlice.type";
import type { Movie } from "../../../types/movie.type";

const initialState: MoviesState = {
  data: [],
  pagination: {
    total: 0,
    page: 0,
    pages: 0,
    limit: paginationConfig.pageSize,
  },
  loading: true,
  errors: undefined,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.pagination.page = payload;
    },
    sort: (state, { payload }) => {
      state.data = state.data.sort((a: any, b: any) => {
        switch (payload) {
          case "nameAsc":
            return a.name.localeCompare(b.name);
          case "nameDesc":
            return b.name.localeCompare(a.name);
          case "rottenTomatoesScoreAsc":
            return a.rottenTomatoesScore - b.rottenTomatoesScore;
          case "rottenTomatoesScoreDesc":
            return b.rottenTomatoesScore - a.rottenTomatoesScore;
          default:
            return a.name.localeCompare(b.name);
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, { payload }) => {
      state.data = payload.docs;
      state.pagination = {
        total: payload.total,
        page: 1,
        pages: Math.ceil(payload.total / paginationConfig.pageSize),
        limit: paginationConfig.pageSize,
      };
      state.loading = false;
    });
    builder.addCase(getAll.rejected, (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    });
  },
});

const getAll = createAsyncThunk(
  "movies/getAll",
  async (_, { rejectWithValue }) => {
    const { getMovies } = moviesApi();

    try {
      const response = await getMovies();
      return response as MoviesPayload;
    } catch (error) {
      if (error instanceof AxiosError && error.message) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred.");
    }
  }
);

const selectAll = createSelector(
  (state: RootState) => state.movies,
  (movies: MoviesState) => movies
);

const selectErrors = createSelector(
  (state: RootState) => state.movies,
  (movies: MoviesState) => movies.errors
);

const selectMoviesById = (id: string) =>
  createSelector(selectAll, (movies: MoviesState) =>
    movies.data.find((movie: Movie) => movie._id === id)
  );

const selectMovieNameById = (id: string) =>
  createSelector(
    selectAll,
    (movies: MoviesState) =>
      movies.data.find((movie: Movie) => movie._id === id)?.name
  );

export const moviesActions = {
  getAll,
  ...moviesSlice.actions,
};

export const moviesSelectors = {
  selectAll,
  selectErrors,
  selectMoviesById,
  selectMovieNameById,
};

export const moviesReducer = moviesSlice.reducer;
