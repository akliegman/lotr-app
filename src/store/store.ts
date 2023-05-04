import { configureStore } from "@reduxjs/toolkit";

import { moviesReducer } from "./slice/movies/moviesSlice";
import { charactersReducer } from "./slice/characters/charactersSlice";
import { quotesReducer } from "./slice/quotes/quotesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    characters: charactersReducer,
    quotes: quotesReducer,
  },
});
