import styles from "./PageTitle.module.scss";

import type { PageTitleProps } from "./PageTitle.type";

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
  withMargin,
}) => {
  return (
    <div
      className={[styles.Container, withMargin && styles.WithMargin].join(" ")}
    >
      <h1 className={styles.Title}>{title}</h1>
      {subtitle && <code className={styles.Subtitle}>{subtitle}</code>}
    </div>
  );
};
