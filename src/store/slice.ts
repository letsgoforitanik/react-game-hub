import { createSlice } from "@reduxjs/toolkit";

const gameQuerySlice = createSlice({
    name: "gameQuery",
    initialState: {},
    reducers: {},
});

export const gameQueryReducer = gameQuerySlice.reducer;
