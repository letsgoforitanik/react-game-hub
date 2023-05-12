import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../components/App";
import ApiClient, { FetchResponse } from "../services/api-client";
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

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", key],
        queryFn: async function ({ pageParam = 1 }) {
            const params = {
                genre: genre?.id,
                parent_platform: platform?.id,
                ordering: sortField,
                search: searchText,
                page: pageParam,
            };

            const gamesClient = new ApiClient<Game>("/games");
            const response = await gamesClient.getAll(params);
            return response;
        },
        getNextPageParam(lastResponse, allResponses) {
            if (lastResponse.next === null) return;
            return allResponses.length + 1;
        },
        staleTime: 1 * 60 * 1000,
    });
}
