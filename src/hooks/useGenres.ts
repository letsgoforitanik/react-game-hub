import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

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
            console.log("genres", response.data);
            return response.data.results;
        },
        staleTime: Infinity,
    });
}
