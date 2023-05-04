import type { Quote } from "../../../types/quote.type";
import type { Pagination } from "../../../types/pagination.type";

export type QuotesState = {
  data: Quote[];
  pagination: Pagination;
  loading: boolean;
  errors: any;
};
