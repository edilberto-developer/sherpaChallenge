

import { getResponse } from "../utils";
import { deletePost, getAllPost, getPostById, getPostEmail, savetPost, upadetPost } from '../external-apis';

export const getAll = async (request: Request) => {
    console.log('Get all Posts');
    const allPosts = await getAllPost();

    return getResponse(allPosts);
}

export const getPost = async (request: Request) => {
    const url: URL = new URL(request.url);
    const pathValues = url.pathname.slice(1).split('/')
    console.log(pathValues[pathValues.length - 1])
    const post = await getPostById(pathValues[pathValues.length - 1]);

    return getResponse(post);
}

export const addPost = async (request: Request) => {
    const body: any = await request.json();

    const post = await savetPost(body);
    return getResponse(post);
}

export const modifyPost = async (request: Request) => {
    const url: URL = new URL(request.url);
    const pathValues = url.pathname.slice(1).split('/')

    const body: any = await request.json();
    const post = await upadetPost(pathValues[pathValues.length - 1], body)

    return getResponse(post);
}

export const removePost = async (request: Request) => {
    const url: URL = new URL(request.url);
    const pathValues = url.pathname.slice(1).split('/')

    await deletePost(pathValues[pathValues.length - 1])
    return getResponse('OK');
} 