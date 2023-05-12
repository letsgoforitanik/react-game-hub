import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import { Platform } from "./useGames";

export default function usePlatforms() {
    return useQuery<Platform[], Error>({
        queryKey: ["platforms"],
        queryFn: async function () {
            const url = "/platforms/lists/parents";
            const response = await apiClient.get<FetchResponse<Platform>>(url);
            return response.data.results;
        },
        staleTime: Infinity,
    });
}
