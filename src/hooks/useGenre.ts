import useGenres from "./useGenres";

export default function useGenre(genreId: number | null) {
    const { data: genres } = useGenres();
    return genres?.find((g) => g.id === genreId);
}
