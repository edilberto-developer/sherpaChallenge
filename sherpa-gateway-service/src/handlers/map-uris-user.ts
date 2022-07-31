const domain = 'gatewayUser'

export const getUrisUser = (env: any) => {
    return {
        token: {
            protected: false,
            method: 'POST',
            restricted: false,
            endpoint: `${env.ENDPOINT_USER}/token`,
            domain
        },
        getAllUser: {
            protected: true,
            method: 'GET',
            restricted: false,
            endpoint: `${env.ENDPOINT_USER}/all`,
            domain
        },
       getOneUser: {
            protected: true,
            method: 'GET',
            restricted: false,
            endpoint: `${env.ENDPOINT_USER}/get`,
            domain
        },
        addUser: {
            protected: true,
            method: 'POST',
            restricted: true,
            endpoint: `${env.ENDPOINT_USER}/add`,
            domain
        },
        updateUser: {
            protected: true,
            method: 'PUT',
            restricted: true,
            endpoint: `${env.ENDPOINT_USER}/update`,
            domain
        },
        deleteUser: {
            protected: true,
            method: 'DELETE',
            restricted: true,
            endpoint: `${env.ENDPOINT_USER}/remove`,
            domain
        }
    }
}