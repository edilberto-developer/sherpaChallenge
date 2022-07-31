import { Router } from 'itty-router';
import {
    getAuthorizationToken,
    getUser,
    getAll,
    addUser,
    modifyUser,
    removeUser
} from './handlers/user';

const routes = Router();
// Ruta base del api para usuarios
const rootPath = '/api/user';

/** PATHS permitidos del servicio y handler que atiende cada peticion*/
routes
    .post(`${rootPath}/token`, getAuthorizationToken)
    .get(`${rootPath}/all`, getAll)
    .get(`${rootPath}/get/:uuid`, getUser)
    .post(`${rootPath}/add`, addUser)
    .put(`${rootPath}/update/:uuid`, modifyUser)
    .delete(`${rootPath}/remove/:uuid`, removeUser)
    .all('*', () => new Response('Not found', { status: 404 }));


export const handleRequest = (request: Request) => routes.handle(request);