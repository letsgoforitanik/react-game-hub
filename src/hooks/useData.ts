import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";

interface FetchResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

export default function useData<T>(endpoint: string) {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    function fetchData() {
        const controller = new AbortController();
        const signal = controller.signal;
        const promise = apiClient.get<FetchResponse<T>>(endpoint, { signal });

        promise.then((response) => setData(response.data.results));
        promise.then((error) => error instanceof AxiosError && setError(error.message));
        promise.finally(() => setLoading(false));

        return () => controller.abort();
    }

    useEffect(fetchData, []);

    return { data, error, loading };
}
