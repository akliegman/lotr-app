import styles from "./CodeBlock.module.scss";

import type { CodeBlockProps } from "./CodeBlock.type";

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <div className={styles.Container}>
      <pre className={styles.Code}>{code?.trim()}</pre>
    </div>
  );
};
