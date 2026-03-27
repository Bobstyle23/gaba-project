import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  total: number;
  skip: number;
  limit: number;
  users: T[];
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAllUsers(requestConfig?: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, requestConfig)
      .then((res) => res.data);
  }

  getUserByName(name: string) {
    return axiosInstance
      .get<FetchResponse<T>>(`${this.endpoint}/search`, {
        params: {
          q: name,
        },
      })
      .then((res) => res.data);
  }

  getUserById(id: number) {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  }
}

export default APIClient;
