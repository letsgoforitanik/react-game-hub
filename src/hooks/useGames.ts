import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import apiClient from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
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
    const [loading, setLoading] = useState(true);

    function fetchGames() {
        const controller = new AbortController();
        const signal = controller.signal;
        const promise = apiClient.get<FetchGameResponse>("/games", { signal });
        promise.then((response) => setGames(response.data.results));
        promise.catch((error) => error instanceof AxiosError && setError(error.message));
        promise.finally(() => setLoading(false));
        return () => controller.abort();
    }

    useEffect(fetchGames, []);

    return { games, error, loading };
}
