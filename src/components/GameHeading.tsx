import { useSelector } from "react-redux";
import { Heading } from "@chakra-ui/react";
import { State } from "../store";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

export default function GameHeading() {
    const gameQuery = useSelector((state: State) => state.gameQuery);

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
