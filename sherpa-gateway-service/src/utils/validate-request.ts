import { decodeToken, validateToken } from "./jwt";

export const isAdmin = async (request: Request) => {
    let valid = false;
    try {
        console.log('Validando rol')
        const token = request.headers.get('token') || '';
        const tokenDecoded = await decodeToken(token);
        // El role 1 es admin
        return tokenDecoded.payload.roleId === 1;
    } catch (error) {
        console.log('error validando rol', error)
    }

    return valid;
}

export const verifyToken = async (env: any, request: Request) => {
    console.log('Validando token');
    const token = request.headers.get('token') || '';
    console.log('token', token);
    return await validateToken(env, token);
}