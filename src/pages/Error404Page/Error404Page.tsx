import { Helmet } from "../../components/Helmet/Helmet";

import styles from "./Error404Page.module.scss";

export const Error404Page: React.FC = () => {
  return (
    <div className={styles.Container}>
      <Helmet title="404: Not found" />
      <h1>404: Not found</h1>
    </div>
  );
};
