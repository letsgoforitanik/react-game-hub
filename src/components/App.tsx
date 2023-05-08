import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { GameGrid, GenreList, Navbar } from ".";
import { Genre } from "../hooks/useGenres";

export default function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

    const handleSelectedGenre = (genre: Genre) => setSelectedGenre(genre);

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
                    <GenreList onSelectGenre={handleSelectedGenre} selectedGenre={selectedGenre} />
                </GridItem>
            </Show>
            <GridItem area="main">
                <GameGrid selectedGenre={selectedGenre} />
            </GridItem>
        </Grid>
    );
}
