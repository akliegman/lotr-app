import { useRef } from "react";

import { useScrollTop } from "../../../hooks/useScrollTop";

import styles from "./Main.module.scss";

import type { MainProps } from "./Main.type";

export const Main: React.FC<MainProps> = ({ children }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useScrollTop(mainRef);

  return (
    <div className={styles.Container} ref={mainRef}>
      {children}
    </div>
  );
};
