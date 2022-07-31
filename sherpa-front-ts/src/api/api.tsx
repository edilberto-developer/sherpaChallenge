import axios, { AxiosRequestHeaders } from "axios";
import { baseUrl } from "../environments/environment";
import { AUTH } from "../util/key-storage";

type OptionsApi = {
    headers?: AxiosRequestHeaders,
    data?: any
}

export const api = async (path: string, method: string, options?: OptionsApi) => {

    axios.interceptors.request.use(
        async config => {

            const header: any = {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=utf-8',
            };

            const auth: any = JSON.parse(localStorage.getItem(AUTH));
            if (auth) {
                header.token = auth.token;
            }

            config.headers = header;
            return config;
        },
        error => {
            Promise.reject(error)
        });

    return (await axios({
        url: `${baseUrl}${path}`,
        method,
        data: options?.data
    })).data;
}