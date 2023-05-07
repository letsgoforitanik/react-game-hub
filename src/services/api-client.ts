import axios from "axios";

const config = {
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "60a5b4b2affb4493a9ab9c7737e3820b",
    },
};

const apiClient = axios.create(config);

export default apiClient;
