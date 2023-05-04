import { Link, generatePath } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { ReactComponent as TomatoIcon } from "../../../assets/rottentomato.svg";

import styles from "./MovieCard.module.scss";

import type { MovieCardProps } from "./MovieCard.type";

export const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <Link
      to={generatePath(routes.Movie.path, { id: data._id })}
      className={styles.Button}
    >
      <div className={styles.Rating}>
        <TomatoIcon className={styles.Icon} />
        <span className={styles.Score}>
          {Math.trunc(data.rottenTomatoesScore)}
          <sub>%</sub>
        </span>
      </div>
      <div className={styles.Title}>
        <h4 className={styles.Name}>{data.name}</h4>
        <code className={styles.Code}>{data._id}</code>
      </div>
    </Link>
  );
};
