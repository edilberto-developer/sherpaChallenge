const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
};

export const getResponse = (data: any) => {
    console.log("Response: " + data)
    return new Response(JSON.stringify(data), { headers })
}