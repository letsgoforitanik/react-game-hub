import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

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
