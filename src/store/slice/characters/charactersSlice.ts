import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

import { charactersApi } from "../../../api/characters/characters";
import { paginationConfig } from "../../../config/paginationConfig";

import { AxiosError } from "axios";
import type { RootState } from "../../store.type";
import type { CharactersState } from "./charactersSlice.type";
import type { CharactersPayload } from "../../../api/characters/characters.type";
import type { Character } from "../../../types/character.type";

const initialState: CharactersState = {
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

const charactersSlice = createSlice({
  name: "characters",
  initialState: initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.pagination.page = payload;
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
  "characters/getAll",
  async (_, { rejectWithValue }) => {
    const { getCharacters } = charactersApi();

    try {
      const response = await getCharacters();
      return response as CharactersPayload;
    } catch (error) {
      if (error instanceof AxiosError && error.message) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred.");
    }
  }
);

const selectAll = createSelector(
  (state: RootState) => state.characters,
  (characters: CharactersState) => characters
);

const selectErrors = createSelector(
  (state: RootState) => state.characters,
  (characters: CharactersState) => characters.errors
);

const selectCharactersById = (id: string) =>
  createSelector(selectAll, (characters: CharactersState) =>
    characters.data.find((character: Character) => character._id === id)
  );

const selectNameById = (id: string) =>
  createSelector(
    selectAll,
    (characters: CharactersState) =>
      characters.data.find((character: Character) => character._id === id)?.name
  );

const selectIdByName = (name: string) =>
  createSelector(
    selectAll,
    (characters: CharactersState) =>
      characters.data.find((character: Character) => character.name === name)
        ?._id
  );

export const charactersActions = {
  getAll,
  ...charactersSlice.actions,
};

export const charactersSelectors = {
  selectAll,
  selectErrors,
  selectCharactersById,
  selectNameById,
  selectIdByName,
};

export const charactersReducer = charactersSlice.reducer;
