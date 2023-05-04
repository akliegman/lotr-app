import { Link } from "react-router-dom";

import styles from "./Breadcrumbs.module.scss";

import type { BreadcrumbsProps } from "./Breadcrumbs.type";

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ routes }) => {
  return (
    <div className={styles.Container}>
      {routes.map((route, index) => {
        const isLast = index === routes.length - 1;

        return (
          <span key={index}>
            <span className={styles.Path}>
              {!isLast ? (
                <>
                  <Link to={route.path} className={styles.Link}>
                    {route.name}
                  </Link>
                  <span className={styles.Separator}>/</span>
                </>
              ) : (
                <span className={styles.Link}>{route.name}</span>
              )}
            </span>
          </span>
        );
      })}
    </div>
  );
};
