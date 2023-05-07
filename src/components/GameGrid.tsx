import { Fragment } from "react";
import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

export default function GameGrid() {
    const { games, error } = useGames();

    return (
        <Fragment>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </Fragment>
    );
}
