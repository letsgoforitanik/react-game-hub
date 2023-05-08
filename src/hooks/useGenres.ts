import useData from "./useData";

interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

export default function useGenres() {
    const { data: genres, error, loading } = useData<Genre>("/genres");
    return { genres, error, loading };
}
