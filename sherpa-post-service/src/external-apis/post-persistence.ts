import { Post } from "../entities";
import { request } from "./request-api";

export const getAllPost = async (): Promise<Array<Post>> => {
    const response = await request(`${ENDPOINT_POST}/all`, 'GET');
    return response as Array<Post>;
} 

export const getPostById = async (id: string): Promise<Post> => {
    const response = await request(`${ENDPOINT_POST}/one/${id}`, 'GET');

    return response as Post;
}

export const getPostEmail = async (email: string): Promise<Post> => {
    const response = await request(`${ENDPOINT_POST}/one/email/${email}`,  'GET');

    return response as Post;
}

export const savetPost = async (data: any) => {
    console.log('body', data)
    const response = await request(`${ENDPOINT_POST}/save`, 'POST', JSON.stringify(data));

    return response;
}

export const upadetPost = async (id: string, data: any) => {
    const response = await request(`${ENDPOINT_POST}/update/${id}`, 'PUT', JSON.stringify(data));

    return response;
}

export const deletePost = async (id: string) => {
    const response = await request(`${ENDPOINT_POST}/delete/${id}`, 'DELETE');

    return response;
}