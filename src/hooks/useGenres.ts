import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Genre } from "../entities";

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
