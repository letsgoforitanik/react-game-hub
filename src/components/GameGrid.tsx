import { Fragment } from "react";
import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard, GameCardSkeleton } from ".";
import useGames from "../hooks/useGames";
import { GameQuery } from "./App";

interface Props {
    gameQuery: GameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
    console.log("GameGrid rendered");
    const { data, error, isLoading, isFetchingNextPage, fetchNextPage } = useGames(gameQuery);
    const skeletons = new Array(16).fill(0);

    if (error) return <Text>{error.message}</Text>;

    return (
        <Fragment>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding={8}>
                {isLoading && skeletons.map((_, index) => <GameCardSkeleton key={index} />)}
                {!isLoading &&
                    data.pages.map((page, index) => (
                        <Fragment key={index}>
                            {page.results.map((game) => (
                                <GameCard key={game.id} game={game} />
                            ))}
                        </Fragment>
                    ))}
            </SimpleGrid>
            <Button marginLeft={7} onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
                {isFetchingNextPage ? "Loading..." : "Load More"}
            </Button>
        </Fragment>
    );
}
