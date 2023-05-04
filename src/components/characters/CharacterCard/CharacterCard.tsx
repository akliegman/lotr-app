import { Link, generatePath } from "react-router-dom";

import { routes } from "../../../routes/routes";
import { ReactComponent as Ogre } from "../../../assets/ogre.svg";

import styles from "./CharacterCard.module.scss";

import type { CharacterCardProps } from "./CharacterCard.type";

export const CharacterCard: React.FC<CharacterCardProps> = ({ data }) => {
  return (
    <Link
      to={generatePath(routes.Character.path, { id: data._id })}
      className={styles.Button}
    >
      <Ogre className={styles.Icon} />
      <div className={styles.Title}>
        <h4 className={styles.Name}>{data.name}</h4>
        <code className={styles.Code}>{data._id}</code>
      </div>
    </Link>
  );
};
