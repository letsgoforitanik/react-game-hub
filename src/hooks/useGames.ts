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
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: async function ({ pageParam = 1 }) {
            const params = {
                genre: gameQuery.genreId,
                parent_platform: gameQuery.platformId,
                ordering: gameQuery.sortBy,
                search: gameQuery.searchText,
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
        staleTime: 1 * 60 * 1000, // 1 min
    });
}
