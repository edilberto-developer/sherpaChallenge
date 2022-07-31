const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Content-type': 'application/json',
};

export const getResponse = (data: any) => {
    console.log("Response: " + JSON.stringify(data))
    return new Response(JSON.stringify(data), { headers })
}