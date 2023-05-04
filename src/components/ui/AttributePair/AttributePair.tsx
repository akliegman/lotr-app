import type { AttributePairProps } from "./AttributePair.type";

import styles from "./AttributePair.module.scss";

export const AttributePair: React.FC<AttributePairProps> = ({
  label,
  value,
  isFullWidth,
}) => {
  const cleanValue = (value: any) => {
    if (
      value === "NaN" ||
      value === "undefined" ||
      value === undefined ||
      value === null ||
      value === ""
    ) {
      return "N/A";
    }
    return value;
  };
  return (
    <div
      className={[styles.Container, isFullWidth && styles.FullWidth].join(" ")}
    >
      <span className={styles.Label}>{label}</span>
      <span className={styles.Value}>{cleanValue(value)}</span>
    </div>
  );
};
