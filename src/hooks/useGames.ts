import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../components/App";
import apiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
export interface Game {
    id: number;
    name: string;
    background_image: string | null;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

export default function useGames(gameQuery: GameQuery) {
    const { genre, platform, sortField, searchText } = gameQuery;

    const key = {
        genreId: genre?.id ?? null,
        platformId: platform?.id ?? null,
        sortBy: sortField,
        searchText,
    };

    return useQuery<Game[], Error>({
        queryKey: ["games", key],
        queryFn: async function () {
            const params = {
                genre: genre?.id,
                parent_platform: platform?.id,
                ordering: sortField,
                search: searchText,
            };

            const response = await apiClient.get<FetchResponse<Game>>("/games", { params });
            return response.data.results;
        },
    });
}
