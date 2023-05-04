import { ModelEnum } from "../../../types/model.enum";
import type { Pagination } from "../../../types/pagination.type";

export type PaginationProps = {
  pagination: Pagination;
  model: ModelEnum;
};
