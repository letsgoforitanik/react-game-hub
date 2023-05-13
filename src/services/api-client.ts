import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

const config = {
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "60a5b4b2affb4493a9ab9c7737e3820b",
    },
};

const axiosInstance = axios.create(config);

class ApiClient<TData> {
    private endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    public async getAll(params?: object) {
        const response = await axiosInstance.get<FetchResponse<TData>>(
            this.endpoint,
            params ? { params } : {}
        );
        return response.data;
    }

    public async get(params?: object) {
        return await axiosInstance.get<TData>(this.endpoint, params ? { params } : {});
    }
}

export default ApiClient;
