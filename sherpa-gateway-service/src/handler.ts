import { Router } from 'itty-router';
import {
    gateway
} from './handlers/gateway';

const routes = Router();
// Ruta base del api para usuarios
const rootPath = '/api/sherpa';

/** PATHS permitidos del servicio y handler que atiende cada peticion*/
routes
    .get('/', () => new Response('ok'))
    .all(`${rootPath}/*`, gateway)


export const handleRequest = (request: Request, env: any) => routes.handle(request, env);