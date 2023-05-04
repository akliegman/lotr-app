import { useDispatch } from "react-redux";

import type { AppDispatch } from "./useAppDispatch.type";

export const useAppDispatch: () => AppDispatch = useDispatch;
