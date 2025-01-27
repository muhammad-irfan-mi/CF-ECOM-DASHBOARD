import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});



// Add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => console.error({ AXIOS_GLOBAL_ERROR: error.response.data })
);

export default axiosInstance;
