import { useEffect, useState, Fragment } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";

interface Game {
    id: number;
    slug: string;
    name: string;
    tba: boolean;
    rating: number;
    background_image: string;
    rating_top: number;
    playtime: number;
    added: number;
    metacritic: number;
    suggestions_count: number;
    reviews_text_count: string;
}

interface FetchGameResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Game[];
}

export default function GameGrid() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => (fetchGames() as any) && undefined, []);

    async function fetchGames() {
        const promise = apiClient.get<FetchGameResponse>("/games");
        promise.then((response) => setGames(response.data.results));
        promise.catch((error) => setError(error.message));
    }

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
