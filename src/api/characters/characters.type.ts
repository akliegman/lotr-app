import type { Character } from "../../types/character.type";

export type CharactersPayload = {
  docs: Character[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};
