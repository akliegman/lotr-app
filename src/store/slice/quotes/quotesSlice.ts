import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

import { quotesApi } from "../../../api/quotes/quotes";
import { paginationConfig } from "../../../config/paginationConfig";

import { AxiosError } from "axios";
import type { RootState } from "../../store.type";
import type { Quote } from "../../../types/quote.type";
import type { QuotesPayload } from "../../../api/quotes/quotes.type";
import type { QuotesState } from "./quotesSlice.type";

const initialState: QuotesState = {
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

const quotesSlice = createSlice({
  name: "quotes",
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
  "quotes/getAll",
  async (_, { rejectWithValue }) => {
    const { getQuotes } = quotesApi();

    try {
      const response = await getQuotes();
      return response as QuotesPayload;
    } catch (error) {
      if (error instanceof AxiosError && error.message) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred.");
    }
  }
);

const selectAll = createSelector(
  (state: RootState) => state.quotes,
  (quotes: QuotesState) => quotes
);

const selectErrors = createSelector(
  (state: RootState) => state.quotes,
  (quotes: QuotesState) => quotes.errors
);

const selectQuotesById = (id: string) =>
  createSelector(selectAll, (quotes: QuotesState) =>
    quotes.data.find((quote: Quote) => quote._id === id)
  );

const selectQuotesByMovieId = (id: string) =>
  createSelector(selectAll, (quotes: QuotesState) =>
    quotes.data.filter((quote: Quote) => quote.movie === id)
  );

const selectQuotesByCharacterId = (id: string) =>
  createSelector(selectAll, (quotes: QuotesState) =>
    quotes.data.filter((quote: Quote) => quote.character === id)
  );

export const quotesActions = {
  getAll,
  ...quotesSlice.actions,
};

export const quotesSelectors = {
  selectAll,
  selectErrors,
  selectQuotesById,
  selectQuotesByMovieId,
  selectQuotesByCharacterId,
};

export const quotesReducer = quotesSlice.reducer;
