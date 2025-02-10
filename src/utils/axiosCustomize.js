import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8081",
});

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        console.log(">>>>response: ", response);

        return response.data ? response.data : response;
    },
    function (error) {
        return error.response.data ? error.response.data : Promise.reject(error);
    }
);

export default instance;
