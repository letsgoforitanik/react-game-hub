import { Flex, Spinner } from "@chakra-ui/react";
import { useGameTrailers } from "../hooks/useGameTrailers";

interface Props {
    gameId: number;
}

export default function GameTrailer({ gameId }: Props) {
    const { data: trailers, error, isLoading } = useGameTrailers(gameId);

    if (isLoading) {
        return (
            <Flex width="100%" height="200px" justifyContent="center" alignItems="center">
                <Spinner />
            </Flex>
        );
    }

    if (error) return <p>{error.message}</p>;

    const trailer = trailers?.[0];

    if (!trailer) return null;

    return <video src={trailer.data[480]} poster={trailer.preview} controls />;
}
