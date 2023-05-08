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
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

export default function useGames(gameQuery: GameQuery) {
    const { genre, platform } = gameQuery;
    const params = { genres: genre?.id, platforms: platform?.id };
    const dependencies = [genre?.id, platform?.id];
    const { data: games, error, loading } = useData<Game>("/games", params, dependencies);
    return { games, error, loading };
}
