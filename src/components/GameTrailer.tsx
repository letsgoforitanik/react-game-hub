import { Spinner } from "@chakra-ui/react";
import { useGameTrailers } from "../hooks/useGameTrailers";

interface Props {
    gameId: number;
}

export default function GameTrailer({ gameId }: Props) {
    const { data: trailers, error, isLoading } = useGameTrailers(gameId);

    if (isLoading) return <Spinner />;

    if (error) return <p>{error.message}</p>;

    const trailer = trailers?.[0];

    if (!trailer) return null;

    return <video src={trailer.data[480]} poster={trailer.preview} controls />;
}
