import { useQuery } from "@tanstack/react-query";
import { Game } from "../hooks/useGames";
import ApiClient from "../services/api-client";

export function useGame(slug: string) {
    return useQuery<Game, Error>({
        queryKey: ["game", slug],
        queryFn: async function () {
            const client = new ApiClient<Game>(`/games/${slug}`);
            const response = await client.get();
            return response.data;
        },
        staleTime: 60 * 60 * 1000,
    });
}
