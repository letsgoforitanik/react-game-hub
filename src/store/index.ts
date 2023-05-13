import { configureStore } from "@reduxjs/toolkit";
import { GameQuery, gameQueryReducer } from "./slice";

export interface State {
    gameQuery: GameQuery;
}

export const store = configureStore({ reducer: { gameQuery: gameQueryReducer } });
