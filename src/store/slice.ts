import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface GameQuery {
    platformId: number | null;
    genreId: number | null;
    sortBy: string | null;
    searchText: string | null;
}

const gameQuerySlice = createSlice({
    name: "gameQuery",
    initialState: {
        platformId: null,
        genreId: null,
        sortBy: null,
        searchText: null,
    } as GameQuery,
    reducers: {
        setPlatformId(state: GameQuery, action: PayloadAction<number>): GameQuery {
            return { ...state, platformId: action.payload };
        },
        setGenreId(state: GameQuery, action: PayloadAction<number>): GameQuery {
            return { ...state, genreId: action.payload };
        },
        setSortBy(state: GameQuery, action: PayloadAction<string>): GameQuery {
            return { ...state, sortBy: action.payload };
        },
        setSearchText(state: GameQuery, action: PayloadAction<string>): GameQuery {
            return { ...state, searchText: action.payload };
        },
    },
});

export const gameQueryReducer = gameQuerySlice.reducer;
export const { setPlatformId, setGenreId, setSortBy, setSearchText } = gameQuerySlice.actions;
