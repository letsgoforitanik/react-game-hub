import usePlatforms from "./usePlatforms";

export default function usePlatform(platformId: number | null) {
    const { data: platforms } = usePlatforms();
    return platforms?.find((p) => p.id === platformId);
}
