import { Character } from "../../types/character.type";
import { Movie } from "../../types/movie.type";
import { Quote } from "../../types/quote.type";
import { ModelEnum } from "../../types/model.enum";

export type EntitiesGridProps = {
  model: ModelEnum;
  data: Movie[] | Character[] | Quote[];
  hideAuthor?: boolean;
};
