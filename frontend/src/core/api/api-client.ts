import type {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse
} from 'axios';
import axios from 'axios';
import { injectable } from 'inversify';
const backendURL = import.meta.env.VITE_BACKEND_URL

@injectable()
export class APIClientService{
    private readonly axiosInstance: AxiosInstance;
/*     private isRefreshing = false;
    private refreshPromise: Promise<void> | null = null;
    private lastLanguageCookieSet: { locale: 'en' | 'es'; at: number } | null = null; */

    constructor(){
       this.axiosInstance= axios.create({
        baseURL: backendURL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        timeout: 5000,
        withCredentials: true
       });
       this.setupRequestInterceptors();
       this.setupResponseInterceptors();
    }

    private setupRequestInterceptors(): void {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token= localStorage.getItem('token');
    if(token){
        config.headers.Authorization = `Token ${token}`;
    }
    else{
        config.headers.Authorization = ''
    }
    return config
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  private setupResponseInterceptors(): void {
    this.axiosInstance.interceptors.response.use(
      (response) => {
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
  }


  /**
   * HTTP Methods
   */
  async get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config);
  }

  async post<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data, config);
  }

  async put<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data, config);
  }

  async patch<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.patch<T>(url, data, config);
  }

  async delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(url, config);
  }

}

