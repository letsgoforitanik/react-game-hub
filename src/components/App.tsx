import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { GameGrid, GameHeading, GenreList, Navbar, PlatformSelector, SortSelector } from ".";

export default function App() {
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
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area="main">
                <GameHeading />
                <Flex paddingLeft={7} gap={5}>
                    <PlatformSelector />
                    <SortSelector />
                </Flex>
                <GameGrid />
            </GridItem>
        </Grid>
    );
}
