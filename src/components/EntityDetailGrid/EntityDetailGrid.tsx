import type { EntityDetailGridProps } from "./EntityDetailGrid.type";

import styles from "./EntityDetailGrid.module.scss";

export const EntityDetailGrid: React.FC<EntityDetailGridProps> = ({
  children,
}) => {
  return <div className={styles.Container}>{children}</div>;
};
