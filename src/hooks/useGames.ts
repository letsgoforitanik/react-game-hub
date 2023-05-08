import { GameQuery } from "../components/App";
import useData from "./useData";
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string | null;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

export default function useGames(gameQuery: GameQuery) {
    const { genre, platform, sortField, searchText } = gameQuery;

    const params = {
        genres: genre?.id,
        platforms: platform?.id,
        ordering: sortField,
        search: searchText,
    };

    const dependencies = [genre?.id, platform?.id, sortField, searchText];
    const { data: games, error, loading } = useData<Game>("/games", params, dependencies);
    return { games, error, loading };
}
