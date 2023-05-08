import { Heading } from "@chakra-ui/react";
import { GameQuery } from "./App";

interface Props {
    gameQuery: GameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
    const platformName = gameQuery.platform?.name;
    const genreName = gameQuery.genre?.name;

    const platformHeading = platformName ? platformName + " " : "";
    const genreHeading = genreName ? genreName + " " : "";

    const heading = `${platformHeading}${genreHeading}Games`;

    return (
        <Heading as="h1" paddingLeft={8} marginBottom={6} fontSize="5xl">
            {heading}
        </Heading>
    );
}
