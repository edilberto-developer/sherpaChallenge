import jwt from '@tsndr/cloudflare-worker-jwt';

import { createToken, decodeToken, getResponse } from "../utils";
import { deleteUser, getAllUsers, getUserById, getUserEmail, savetUser, upadetUser } from '../external-apis';
import { User } from "../entities";

export const getAuthorizationToken = async (request: Request) => {
    const body: any = await request.json();
    console.log('getAuthorizationToken: ', body);

    const user: User = await getUserEmail(body.email);
    if (user.password !== body.password) {
        return getResponse({
            code: '001.0002.000',
            message: 'Invalid user'
        });
    }
    const token = await createToken(user, KEY_SIGN_TOKEN);
    const decode = await decodeToken(token)
    console.log('token', token);
    const { id, name, lname, sname, roleId, email } = decode.payload;

    return getResponse({
        token,
        user: { id, name, lname, sname, roleId, email }
    });
}
export const getAll = async (request: Request) => {
    console.log('Get all users');
    const allUsers = await getAllUsers();

    return getResponse(allUsers);
}

export const getUser = async (request: Request) => {
    const url: URL = new URL(request.url);
    const pathValues = url.pathname.slice(1).split('/')
    console.log(pathValues[pathValues.length - 1])
    const user = await getUserById(pathValues[pathValues.length - 1]);

    return getResponse(user);
}

export const addUser = async (request: Request) => {
    const body: any = await request.json();

    const user = await savetUser(body);
    return getResponse(user);
}

export const modifyUser = async (request: Request) => {
    const url: URL = new URL(request.url);
    const pathValues = url.pathname.slice(1).split('/')

    const body: any = await request.json();
    const user = await upadetUser(pathValues[pathValues.length - 1], body)

    return getResponse(user);
}

export const removeUser = async (request: Request) => {
    const url: URL = new URL(request.url);
    const pathValues = url.pathname.slice(1).split('/')

    await deleteUser(pathValues[pathValues.length - 1])
    return getResponse('OK');
} 