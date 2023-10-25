import axios from "axios";
import router from "@/router";

const API = axios.create();

API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

API.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401 && error.response.data.message === 'Token has expired') {

            return refreshToken()
                .then((response) => {
                    const newToken = response.data.authorisation.token;
                    localStorage.setItem('token', newToken);
                    error.config.headers['Authorization'] = `Bearer ${newToken}`;
                    return axios.request(error.config);
                })
                .catch((refreshError) => {

                    return Promise.reject(refreshError);
                });
        } else {
            
            return Promise.reject(error);
        }
    }
);

function refreshToken() {
    return axios.post('http://localhost:7777/api/auth/refresh', {}, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
}

export default API;
