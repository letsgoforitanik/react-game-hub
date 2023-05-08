import { Fragment } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard, GameCardSkeleton } from ".";
import useGames from "../hooks/useGames";
import { GameQuery } from "./App";

interface Props {
    gameQuery: GameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
    const { games, error, loading } = useGames(gameQuery);
    const skeletons = new Array(15).fill(0);

    return (
        <Fragment>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={8}>
                {loading && skeletons.map((_, index) => <GameCardSkeleton key={index} />)}
                {!loading && games.map((game) => <GameCard key={game.id} game={game} />)}
            </SimpleGrid>
        </Fragment>
    );
}
