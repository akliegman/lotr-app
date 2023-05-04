import { api } from "../api";

import type { AxiosError } from "axios";
import type { CharactersPayload } from "./characters.type";

export const charactersApi = () => {
  const getCharacters: () => Promise<
    CharactersPayload | AxiosError
  > = async () => {
    try {
      const response = await api.get("/character", {
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
    getCharacters,
  };
};
