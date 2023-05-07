import { Grid, GridItem, Show } from "@chakra-ui/react";
import { GameGrid, Navbar } from ".";

export default function App() {
    const templateAreas = {
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
    };

    return (
        <Grid templateAreas={templateAreas}>
            <GridItem area="nav">
                <Navbar />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside">Aside</GridItem>
            </Show>
            <GridItem area="main">
                <GameGrid />
            </GridItem>
        </Grid>
    );
}
