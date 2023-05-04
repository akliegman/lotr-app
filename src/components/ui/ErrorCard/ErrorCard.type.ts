import type { Error } from "../../../types/error.type";
import type { ModelEnum } from "../../../types/model.enum";

export type ErrorCardProps = {
  error: Error;
  model: ModelEnum;
};
