import { Quote } from "../../types/quote.type";

export type QuotesPayload = {
  docs: Quote[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};
