import { Link } from "react-router-dom";

import styles from "./ModelCard.module.scss";

import type { ModelCardProps } from "./ModelCard.type";

export const ModelCard: React.FC<ModelCardProps> = ({ name, path, icon }) => {
  return (
    <Link to={path} className={styles.Button}>
      <div className={styles.Icon}>{icon}</div>
      <span className={styles.Name}>{name}</span>
      <code className={styles.Code}>{path}</code>
    </Link>
  );
};
