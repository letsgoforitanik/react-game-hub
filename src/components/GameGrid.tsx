import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { GameCard, GameCardSkeleton } from ".";
import useGames from "../hooks/useGames";
import { GameQuery } from "./App";

interface Props {
    gameQuery: GameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
    const exports = useGames(gameQuery);

    const { data, error, isLoading } = exports;
    const { fetchNextPage, hasNextPage } = exports;

    const skeletons = new Array(16).fill(0);

    if (error) return <Text>{error.message}</Text>;

    const fetchedCount = data?.pages.reduce((total, page) => total + page.results.length, 0) ?? 0;

    return (
        <Fragment>
            <InfiniteScroll
                hasMore={hasNextPage ?? false}
                loader={<Spinner />}
                next={fetchNextPage}
                dataLength={fetchedCount}
            >
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
            </InfiniteScroll>
        </Fragment>
    );
}
