import { api } from "../api";

import type { QuotesPayload } from "./quotes.type";
import type { AxiosError } from "axios";

export const quotesApi = () => {
  const getQuotes: () => Promise<QuotesPayload | AxiosError> = async () => {
    try {
      const response = await api.get("/quote", {
        params: {
          limit: 5000,
        },
      });
      return response.data;
    } catch (error: AxiosError | any) {
      throw error;
    }
  };

  return { getQuotes };
};
