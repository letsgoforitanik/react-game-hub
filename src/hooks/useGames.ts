import { useState, useEffect } from "react";
import { AxiosError } from "axios";
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
    ratings_count: string;
}

interface FetchGameResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Game[];
}

export default function useGames() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    function fetchGames() {
        const controller = new AbortController();
        const signal = controller.signal;
        const promise = apiClient.get<FetchGameResponse>("/games", { signal });
        promise.then((response) => setGames(response.data.results));
        promise.catch((error) => error instanceof AxiosError && setError(error.message));
        return () => controller.abort();
    }

    useEffect(fetchGames, []);

    return { games, error };
}
