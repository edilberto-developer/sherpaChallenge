import jwt from '@tsndr/cloudflare-worker-jwt';

export const decodeToken = async (token: string) => {
    return await jwt.decode(token)
}

export const validateToken = async (env: any, token: string) => {
    const valid =  await jwt.verify(token, env.KEY_SIGN_TOKEN);
    console.log('Result validation token', valid);
    return valid;
}