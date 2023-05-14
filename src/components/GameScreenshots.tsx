import { Flex, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useGameScreenshots } from "../hooks/useGameScreenshots";

interface Props {
    gameId: number;
}

export default function GameScreenshots({ gameId }: Props) {
    const { data: screenshots, error, isLoading } = useGameScreenshots(gameId);

    if (isLoading) {
        return (
            <Flex width="100%" height="200px" justifyContent="center" alignItems="center">
                <Spinner />
            </Flex>
        );
    }

    if (error) return <p>{error.message}</p>;

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            {screenshots.map((screenshot) => (
                <Image key={screenshot.id} src={screenshot.image} />
            ))}
        </SimpleGrid>
    );
}
