import { configureStore } from "@reduxjs/toolkit";
import { gameQueryReducer } from "./slice";

export const store = configureStore({ reducer: { gameQuery: gameQueryReducer } });
