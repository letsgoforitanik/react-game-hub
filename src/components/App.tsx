import { useState } from "react";
import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { GameGrid, GenreList, Navbar, PlatformSelector, SortSelector } from ".";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";

export interface GameQuery {
    platform: Platform | null;
    genre: Genre | null;
    sortField: string;
}

export default function App() {
    const initQuery = { genre: null, platform: null, sortField: "" };
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
                <Navbar />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList
                        onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
                        selectedGenre={gameQuery.genre}
                    />
                </GridItem>
            </Show>
            <GridItem area="main">
                <Flex paddingLeft={7} gap={5}>
                    <PlatformSelector
                        onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
                        selectedPlatform={gameQuery.platform}
                    />
                    <SortSelector
                        onSelectSortField={(sortField) => setGameQuery({ ...gameQuery, sortField })}
                        selectedSortField={gameQuery.sortField}
                    />
                </Flex>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}
