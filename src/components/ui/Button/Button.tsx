import styles from "./Button.module.scss";

import type { ButtonProps } from "./Button.type";

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button className={[styles.Button, className].join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};
