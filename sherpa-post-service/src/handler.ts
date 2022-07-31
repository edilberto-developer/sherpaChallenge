import { Router } from 'itty-router';
import {
    getPost,
    getAll,
    addPost,
    modifyPost,
    removePost
} from './handlers/post';

const routes = Router();
// Ruta base del api para usuarios
const rootPath = '/api/post';

/** PATHS permitidos del servicio y handler que atiende cada peticion*/
routes
    .get(`${rootPath}/all`, getAll)
    .get(`${rootPath}/get/:uuid`, getPost)
    .post(`${rootPath}/add`, addPost)
    .put(`${rootPath}/update/:uuid`, modifyPost)
    .delete(`${rootPath}/remove/:uuid`, removePost)
    .all('*', () => new Response('Not found', { status: 404 }));


export const handleRequest = (request: Request) => routes.handle(request);