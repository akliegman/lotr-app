import styles from "./Sidebar.module.scss";

import type { SidebarProps } from "./Sidebar.type";

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};
