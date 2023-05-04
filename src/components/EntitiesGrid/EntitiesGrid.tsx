import { MovieCard } from "../movies/MovieCard/MovieCard";
import { CharacterCard } from "../characters/CharacterCard/CharacterCard";
import { QuoteCard } from "../quotes/QuoteCard/QuoteCard";
import { Movie } from "../../types/movie.type";
import { Character } from "../../types/character.type";
import { Quote } from "../../types/quote.type";

import styles from "./EntitiesGrid.module.scss";

import { ModelEnum } from "../../types/model.enum";
import type { EntitiesGridProps } from "./EntitiesGrid.type";

export const EntitiesGrid: React.FC<EntitiesGridProps> = ({
  model,
  data,
  hideAuthor = false,
}) => {
  return (
    <>
      <div className={styles.Container}>
        {model === ModelEnum.Movies &&
          data.map((movie, index) => (
            <MovieCard key={index} data={movie as Movie} />
          ))}
        {model === ModelEnum.Characters &&
          data.map((character, index) => (
            <CharacterCard key={index} data={character as Character} />
          ))}

        {model === ModelEnum.Quotes &&
          data.map((quote, index) => (
            <QuoteCard
              key={index}
              data={quote as Quote}
              hideAuthor={hideAuthor}
            />
          ))}
      </div>
    </>
  );
};
