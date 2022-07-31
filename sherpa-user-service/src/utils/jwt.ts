import jwt from '@tsndr/cloudflare-worker-jwt';
import { User } from '../entities';

export const createToken = async (user: User) => {
    return await jwt.sign(user, KEY_SIGN_TOKEN);
}

export const decodeToken = async (token: string) => {
    return await jwt.decode(token)
}

export const validateToken = async (token: string) => {
    return await jwt.verify(token, KEY_SIGN_TOKEN);
}