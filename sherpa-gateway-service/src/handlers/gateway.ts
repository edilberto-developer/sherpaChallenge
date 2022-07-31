
import { getResponse, isAdmin, verifyToken } from "../utils";
import { requestApi } from '../external-apis'
import { getMapUris } from "./map-uris";

const getFinalUrl = (queryString: string[], endpoint: string) => {
    if (queryString.length > 3) {
        const queryPath = queryString.slice(3, queryString.length).join('/');
        return `${endpoint}/${queryPath}`;
    } else {
        return endpoint;
    }
}

export const gateway = async (request: Request, env: any) => {

    if (request.method === 'OPTIONS' || request.method === 'HEAD') {
        return new Response(null, {
            status: 200,
            headers: {
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            }
        });
    }

    const mapRoutes: any = getMapUris(env);
    try {
        const url: URL = new URL(request.url);
        const queryString = url.pathname.slice(1).split('/');

        const serviceName = queryString.length > 2 ? queryString[2] : undefined;
        console.log('Service name:', serviceName);
        if (serviceName) {
            // Recupera la configuracion del servicio
            const configService: any = mapRoutes[serviceName];
            if (configService.protected && !(await verifyToken(env,request))) {
                return new Response('Token invalid', { status: 401 })
            }

            if (configService.restricted && !(await isAdmin(request))) {
                return new Response('Access denied', { status: 403 })
            }

            if (configService.method !== request.method) {
                return new Response('Bad request - method not equals', { status: 400 })
            }

            const finalEndpoint = getFinalUrl(queryString, configService.endpoint);
            console.log('Endpoint final', finalEndpoint)

            let response: Response;
            if (configService.method === 'POST' || configService.method === 'PUT') {
                console.log('Method post')
                const body = await request.json();
                response = await requestApi(env, finalEndpoint, configService, JSON.stringify(body));
            } else {
                console.log('Method get')
                response = await requestApi(env, finalEndpoint, configService);
            }

            return getResponse(response);
        } else {
            console.log('Service name not found');
            return new Response('Not found', { status: 404 })
        }

    } catch (error: any) {
        console.log(error);
        return new Response(error, { status: 500 })
    }
}