import { useSelector } from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../store/store.type";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
