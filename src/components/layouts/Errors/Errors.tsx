import { useAppSelector } from "../../../hooks/useAppSelector";
import { charactersSelectors } from "../../../store/slice/characters/charactersSlice";
import { moviesSelectors } from "../../../store/slice/movies/moviesSlice";
import { quotesSelectors } from "../../../store/slice/quotes/quotesSlice";
import { ErrorCard } from "../../ui/ErrorCard/ErrorCard";

import styles from "./Errors.module.scss";

import type { ModelEnum } from "../../../types/model.enum";
import type { Error } from "../../../types/error.type";

export const Errors: React.FC = () => {
  const quotesErrors = useAppSelector(quotesSelectors.selectErrors);
  const charactersErrors = useAppSelector(charactersSelectors.selectErrors);
  const moviesErrors = useAppSelector(moviesSelectors.selectErrors);

  const errors = [
    ...(quotesErrors?.length ? [{ Quotes: quotesErrors }] : []),
    ...(charactersErrors?.length ? [{ Characters: charactersErrors }] : []),
    ...(moviesErrors?.length ? [{ Movies: moviesErrors }] : []),
  ].flat();

  if (!errors.length) return null;

  return (
    <div className={styles.Container}>
      {errors.map((error, index) => (
        <ErrorCard
          key={index}
          model={Object.keys(error)[0] as ModelEnum}
          error={Object.values(error)[0] as Error}
        />
      ))}
    </div>
  );
};
