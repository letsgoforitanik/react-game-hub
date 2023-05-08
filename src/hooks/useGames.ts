import useData from "./useData";
import { Genre } from "./useGenres";

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

export default function useGames(selectedGenre: Genre | null) {
    const params = { genres: selectedGenre?.id };
    const dependencies = [selectedGenre];
    const { data: games, error, loading } = useData<Game>("/games", params, dependencies);
    return { games, error, loading };
}
