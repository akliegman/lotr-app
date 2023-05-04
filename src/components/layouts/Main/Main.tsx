import styles from "./Main.module.scss";

import type { MainProps } from "./Main.type";

export const Main: React.FC<MainProps> = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};
