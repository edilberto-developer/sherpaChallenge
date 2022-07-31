const headers = { 'Content-type': 'application/json' };

export const requestApi = async (env: any, endpoint: string, config: any, body?: any) => {
    console.log('Config', config)
    const response = await env[config.domain].fetch(endpoint, {
        headers,
        method: config.method,
        body
    });

    console.log('Response', response)
    return response.json();
}