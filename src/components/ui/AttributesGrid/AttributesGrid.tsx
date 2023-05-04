import styles from "./AttributesGrid.module.scss";

import type { AttributesGridProps } from "./AttributesGrid.type";

export const AttributesGrid: React.FC<AttributesGridProps> = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};
