import { Link, generatePath } from "react-router-dom";

import { routes } from "../../../routes/routes";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { charactersSelectors } from "../../../store/slice/characters/charactersSlice";
import { ReactComponent as QuoteIcon } from "../../../assets/quote.svg";

import type { QuoteCardProps } from "./QuoteCard.type";

import styles from "./QuoteCard.module.scss";

export const QuoteCard: React.FC<QuoteCardProps> = ({ data, hideAuthor }) => {
  const character = useAppSelector(
    charactersSelectors.selectNameById(data.character)
  );

  return (
    <Link
      to={generatePath(routes.Quote.path, { id: data._id })}
      className={styles.Button}
    >
      <QuoteIcon className={styles.Icon} />
      <div className={styles.Title}>
        <h4 className={styles.Dialog}>"{data.dialog}"</h4>
        {!hideAuthor && <p className={styles.Author}>— {character}</p>}
        <code className={styles.Code}>{data._id}</code>
      </div>
    </Link>
  );
};
