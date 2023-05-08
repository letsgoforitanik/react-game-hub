import { Fragment } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from ".";
import useGames from "../hooks/useGames";

export default function GameGrid() {
    const { games, error } = useGames();

    return (
        <Fragment>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={8}>
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </Fragment>
    );
}
