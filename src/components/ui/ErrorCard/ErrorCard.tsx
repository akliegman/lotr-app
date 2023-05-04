import { ReactComponent as Alert } from "../../../assets/alert.svg";

import styles from "./ErrorCard.module.scss";

import type { ErrorCardProps } from "./ErrorCard.type";

export const ErrorCard: React.FC<ErrorCardProps> = ({ error, model }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Icon}>
        <Alert />
      </div>
      <div className={styles.Message}>
        <span className={styles.Label}>{model} Error:</span> {error}. Please try
        again soon.
      </div>
    </div>
  );
};
