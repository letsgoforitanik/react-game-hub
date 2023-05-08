import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

export default function useData<T>(endpoint: string, params: object = {}, deps: any[] = []) {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    function fetchData() {
        setLoading(true);

        const controller = new AbortController();
        const signal = controller.signal;
        const promise = apiClient.get<FetchResponse<T>>(endpoint, { signal, params });

        promise.then((response) => setData(response.data.results));
        promise.catch((error) => error instanceof AxiosError && setError(error.message));
        promise.finally(() => setLoading(false));

        return () => controller.abort();
    }

    useEffect(fetchData, deps);

    return { data, error, loading };
}
