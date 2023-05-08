import useData from "./useData";
import { Platform } from "./useGames";

export default function usePlatforms() {
    const { data: platforms, error, loading } = useData<Platform>("/platforms/lists/parents");
    return { platforms, error, loading };
}
