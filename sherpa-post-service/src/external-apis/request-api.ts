const headers = { 'Content-type': 'application/json'};

export const request = async (endpoint: string, method: string, body?: any) => {
    const response = await fetch(endpoint, {
        headers,
        method,
        body
    });

    const data = await response.json();
    console.log('Response: ', data);

    return data;
}