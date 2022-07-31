import { useCallback, useEffect, useState } from 'react';
import { api } from '../api/api';

export const useUser = () => {
    const initialValues = {
        id: 0,
        email: '',
        password: '',
        name: '',
        lname: '',
        sname: '',
        roleId: 2,
        active: true
    };

    const [usersLst, setUsersLst] = useState<any[]>();
    const [operationSuccessful, setOperationSuccessful] = useState<boolean>(false);
    const [values, setValues] = useState(initialValues);

    const getAll = useCallback(async () => {
        const response = await api('/getAllUser', 'GET');
        setUsersLst(response.results);
    }, [setUsersLst]);

    const addUser = useCallback(async (user) => {
        await api('/addUser', 'POST', {
            data: {
                ...user
            }
        });

        setValues({ ...initialValues })
        setOperationSuccessful(true);
    }, [initialValues, setValues, setOperationSuccessful]);

    const updateUser = useCallback(async (post) => {
        const { name, lname, sname, email, roleId } = post;
        await api(`/updateUser/${post.id}`, 'PUT', {
            data: {
                name,
                lname,
                sname,
                email,
                roleId
            }
        });

        setValues({ ...initialValues })
        setOperationSuccessful(true);
    }, [initialValues, setValues, setOperationSuccessful]);

    const deleteUser = useCallback(async (id: number) => {
        await api(`/deleteUser/${id}`, 'DELETE');
        setOperationSuccessful(true);
    }, [setOperationSuccessful]);

    useEffect(() => {
        getAll();
        setOperationSuccessful(false)
    }, [operationSuccessful, setOperationSuccessful, getAll]);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return {
        initialValues,
        usersLst,
        values,
        setValues,
        setOperationSuccessful,
        addUser,
        updateUser,
        deleteUser,
        handleChange
    };
};
