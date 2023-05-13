import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { GameScreenshot } from "../entities";

export function useGameScreenshots(gameId: number) {
    return useQuery<GameScreenshot[], Error>({
        queryKey: ["game-screenshots", gameId],
        queryFn: async function () {
            const client = new ApiClient<GameScreenshot>(`/games/${gameId}/screenshots`);
            const response = await client.getAll();
            return response.results;
        },
        staleTime: 60 * 60 * 1000,
    });
}
