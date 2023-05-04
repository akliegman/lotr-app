import styles from "./PageHeading.module.scss";

import type { PageHeadingProps } from "./PageHeading.type";

export const PageHeading: React.FC<PageHeadingProps> = ({ title }) => {
  return (
    <div className={styles.Container}>
      <h2 className={styles.Title}>{title}</h2>
    </div>
  );
};
