import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

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
            const genreClient = new ApiClient<Genre>("/genres");
            const response = await genreClient.getAll();
            return response.results;
        },
        staleTime: Infinity,
    });
}
