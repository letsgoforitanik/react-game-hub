import { Heading } from "@chakra-ui/react";
import { GameQuery } from "./App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
    gameQuery: GameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
    const platform = usePlatform(gameQuery.platformId);
    const genre = useGenre(gameQuery.genreId);

    const platformName = platform?.name;
    const genreName = genre?.name;

    const platformHeading = platformName ? platformName + " " : "";
    const genreHeading = genreName ? genreName + " " : "";

    const heading = `${platformHeading}${genreHeading}Games`;

    return (
        <Heading as="h1" paddingLeft={8} marginBottom={6} fontSize="5xl">
            {heading}
        </Heading>
    );
}
