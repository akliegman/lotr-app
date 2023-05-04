import { Link } from "react-router-dom";

import { routes } from "../../../routes/routes";

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.Container}>
      <Link to={routes.Home.path} className={styles.Logo}>
        <h1 className={styles.Title}>API Explorer</h1>
        <h2 className={styles.Subtitle}>Lord of the Rings</h2>
      </Link>
    </div>
  );
};
