import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

export default function useGenres() {
    return useQuery<Genre[], Error>({
        queryKey: ["genres"],
        queryFn: async function () {
            const response = await apiClient.get<FetchResponse<Genre>>("/genres");
            return response.data.results;
        },
        staleTime: Infinity,
    });
}
