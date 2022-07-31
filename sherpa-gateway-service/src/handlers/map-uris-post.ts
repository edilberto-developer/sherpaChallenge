const domain = 'gatewayPost'

export const getUrisPost = (env: any) => {
    return {
        getAllPost: {
            protected: true,
            method: 'GET',
            restricted: false,
            endpoint: `${env.ENDPOINT_POST}/all`,
            domain
        },
       getOnePost: {
            protected: true,
            method: 'GET',
            restricted: false,
            endpoint: `${env.ENDPOINT_POST}/get`,
            domain
        },
        addPost: {
            protected: true,
            method: 'POST',
            restricted: true,
            endpoint: `${env.ENDPOINT_POST}/add`,
            domain
        },
        updatePost: {
            protected: true,
            method: 'PUT',
            restricted: true,
            endpoint: `${env.ENDPOINT_POST}/update`,
            domain
        },
        deletePost: {
            protected: true,
            method: 'DELETE',
            restricted: true,
            endpoint: `${env.ENDPOINT_POST}/remove`,
            domain
        }
    }
}