import { useState } from "react";
import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { GameGrid, GameHeading, GenreList, Navbar, PlatformSelector, SortSelector } from ".";

export interface GameQuery {
    platformId: number | null;
    genreId: number | null;
    sortBy: string | null;
    searchText: string | null;
}

export default function App() {
    const initQuery: GameQuery = {
        platformId: null,
        genreId: null,
        sortBy: null,
        searchText: null,
    };

    const [gameQuery, setGameQuery] = useState<GameQuery>(initQuery);

    const templateAreas = {
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
    };

    const templateColumns = {
        base: "1fr",
        lg: "200px 1fr",
    };

    return (
        <Grid templateAreas={templateAreas} templateColumns={templateColumns}>
            <GridItem area="nav">
                <Navbar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList
                        onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
                        selectedGenreId={gameQuery.genreId}
                    />
                </GridItem>
            </Show>
            <GridItem area="main">
                <GameHeading gameQuery={gameQuery} />
                <Flex paddingLeft={7} gap={5}>
                    <PlatformSelector
                        onSelectPlatform={(p) => setGameQuery({ ...gameQuery, platformId: p.id })}
                        selectedPlatformId={gameQuery.platformId}
                    />
                    <SortSelector
                        onSelectSortField={(sortBy) => setGameQuery({ ...gameQuery, sortBy })}
                        selectedSortField={gameQuery.sortBy}
                    />
                </Flex>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}
