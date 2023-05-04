import type { Character } from "../../../types/character.type";
import type { Pagination } from "../../../types/pagination.type";

export type CharactersState = {
  data: Character[];
  pagination: Pagination;
  loading: boolean;
  errors: any;
};
