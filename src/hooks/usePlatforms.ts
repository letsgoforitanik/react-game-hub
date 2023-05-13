import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Platform } from "../entities";

export default function usePlatforms() {
    return useQuery<Platform[], Error>({
        queryKey: ["platforms"],
        queryFn: async function () {
            const platformClient = new ApiClient<Platform>("/platforms/lists/parents");
            const response = await platformClient.getAll();
            return response.results;
        },
        staleTime: Infinity,
    });
}
