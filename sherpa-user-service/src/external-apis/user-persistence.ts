import { User } from "../entities";
import { request } from "./request-api";

export const getAllUsers = async (): Promise<Array<User>> => {
    const response = await request(`${ENDPOINT_USER}/all`, 'GET');
    return response as Array<User>;
} 

export const getUserById = async (id: string): Promise<User> => {
    const response = await request(`${ENDPOINT_USER}/one/${id}`, 'GET');

    return response as User;
}

export const getUserEmail = async (email: string): Promise<User> => {
    const response = await request(`${ENDPOINT_USER}/one/email/${email}`,  'GET');

    return response as User;
}

export const savetUser = async (data: any) => {
    console.log('body', data)
    const response = await request(`${ENDPOINT_USER}/save`, 'POST', JSON.stringify(data));

    return response;
}

export const upadetUser = async (id: string, data: any) => {
    const response = await request(`${ENDPOINT_USER}/update/${id}`, 'PUT', JSON.stringify(data));

    return response;
}

export const deleteUser = async (id: string) => {
    const response = await request(`${ENDPOINT_USER}/delete/${id}`, 'DELETE');

    return response;
}