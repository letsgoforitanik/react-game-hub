import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard, GameCardSkeleton } from ".";
import useGames from "../hooks/useGames";
import { GameQuery } from "./App";

interface Props {
    gameQuery: GameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
    const { data: games, error, isLoading } = useGames(gameQuery);
    const skeletons = new Array(16).fill(0);

    if (error) return <Text>{error.message}</Text>;

    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding={8}>
            {isLoading && skeletons.map((_, index) => <GameCardSkeleton key={index} />)}
            {!isLoading && games.map((game) => <GameCard key={game.id} game={game} />)}
        </SimpleGrid>
    );
}
