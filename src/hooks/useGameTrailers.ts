import { useQuery } from "@tanstack/react-query";
import { GameTrailer } from "../entities";
import ApiClient from "../services/api-client";

export function useGameTrailers(gameId: number) {
    return useQuery<GameTrailer[], Error>({
        queryKey: ["game-trailer", gameId],
        queryFn: async function () {
            const client = new ApiClient<GameTrailer>(`/games/${gameId}/movies`);
            const response = await client.getAll();
            return response.results;
        },
        staleTime: 60 * 60 * 1000,
    });
}
