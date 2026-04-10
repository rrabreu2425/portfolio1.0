import axios from 'axios';

const backendURL = import.meta.env.VITE_BACKEND_URL
export const ApiClient = axios.create({
  baseURL: backendURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
})

ApiClient.interceptors.request.use((config)=>{
    const token= localStorage.getItem('token');
    if(token){
        config.headers.Authorization = `Token ${token}`;
    }
    else{
        config.headers.Authorization = ''
    }
    return config
})

ApiClient.interceptors.response.use(
    (response) =>{
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);
