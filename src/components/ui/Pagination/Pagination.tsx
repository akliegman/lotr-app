import React, { useEffect } from "react";
import {
  useNavigate,
  useLocation,
  useSearchParams,
  Link,
} from "react-router-dom";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { charactersActions } from "../../../store/slice/characters/charactersSlice";
import { quotesActions } from "../../../store/slice/quotes/quotesSlice";
import { moviesActions } from "../../../store/slice/movies/moviesSlice";
import { ReactComponent as CaretLeft } from "../../../assets/caret-left.svg";
import { ReactComponent as CaretRight } from "../../../assets/caret-right.svg";
import { ReactComponent as CaretDoubleLeft } from "../../../assets/caret-double-left.svg";
import { ReactComponent as CaretDoubleRight } from "../../../assets/caret-double-right.svg";

import styles from "./Pagination.module.scss";

import { ModelEnum } from "../../../types/model.enum";
import type { PaginationProps } from "./Pagination.type";
import type { Action } from "@reduxjs/toolkit";

export const Pagination: React.FC<PaginationProps> = ({
  model,
  pagination,
}) => {
  const [params, setParams] = useSearchParams();
  const page = params.get("page");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const changePage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const pg = e.target.value;
    navigate(`${location.pathname}?page=${pg}`);
    e.target.blur();
  };

  useEffect(() => {
    const action: (pageNumber: number) => Action = (pageNumber) => {
      switch (model) {
        case ModelEnum.Characters:
          return charactersActions.setPage(pageNumber);
        case ModelEnum.Movies:
          return moviesActions.setPage(pageNumber);
        case ModelEnum.Quotes:
          return quotesActions.setPage(pageNumber);
        default:
          return null as unknown as Action;
      }
    };

    if (page) {
      const pageNumber = Number(page);
      dispatch(action(pageNumber));
    } else {
      setParams({ page: "1" });
    }
  }, [page, dispatch, model, setParams]);

  return (
    <div className={styles.Container}>
      <div className={styles.Buttons}>
        {pagination.page === 1 ? (
          <span className={[styles.Button, styles.Disabled].join(" ")}>
            <CaretDoubleLeft className={styles.ButtonIcon} />
          </span>
        ) : (
          <Link
            to={`${location.pathname}?page=1`}
            className={styles.Button}
            aria-label="First Page"
          >
            <CaretDoubleLeft className={styles.ButtonIcon} />
          </Link>
        )}
        {pagination.page <= 1 ? (
          <span className={[styles.Button, styles.Disabled].join(" ")}>
            <CaretLeft className={styles.ButtonIcon} />
          </span>
        ) : (
          <Link
            className={styles.Button}
            to={`${location.pathname}?page=${pagination.page - 1}`}
            aria-label="Previous Page"
          >
            <CaretLeft className={styles.ButtonIcon} />
          </Link>
        )}
      </div>
      <div className={styles.Description}>
        <span>Page</span>
        <span className={styles.PagePicker}>
          <select
            className={styles.Select}
            onChange={(e) => changePage(e)}
            value={pagination.page}
            aria-label="Select Page"
          >
            {Array.from({ length: pagination.pages }).map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </span>
        <span>of {pagination.pages}</span>
      </div>
      <div className={styles.Buttons}>
        {pagination.page >= pagination.pages ? (
          <span className={[styles.Button, styles.Disabled].join(" ")}>
            <CaretRight className={styles.ButtonIcon} />
          </span>
        ) : (
          <Link
            to={`${location.pathname}?page=${pagination.page + 1}`}
            className={styles.Button}
            aria-label="Next Page"
          >
            <CaretRight className={styles.ButtonIcon} />
          </Link>
        )}
        {pagination.page === pagination.pages ? (
          <span className={[styles.Button, styles.Disabled].join(" ")}>
            <CaretDoubleRight className={styles.ButtonIcon} />
          </span>
        ) : (
          <Link
            className={styles.Button}
            to={`${location.pathname}?page=${pagination.pages}`}
            aria-label="Last Page"
          >
            <CaretDoubleRight className={styles.ButtonIcon} />
          </Link>
        )}
      </div>
    </div>
  );
};
