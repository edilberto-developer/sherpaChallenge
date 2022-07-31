import { useCallback, useEffect, useState } from 'react';
import { api } from '../api/api';
import { formatDDMMYYYY } from '../util/date-util';
import { AUTH } from '../util/key-storage';

export const usePost = () => {
    const auth = JSON.parse(localStorage.getItem(AUTH));
    const initialValues = {
        title: '',
        description: '',
        user: `${auth.user.name} ${auth.user.lname} ${auth.user.sname}`,
        userId: auth.user.id,
        likes: 0,
        visits: 0
    };

    const [postsLst, setPostLst] = useState<any[]>();
    const [operationSuccessful, setOperationSuccessful] = useState<boolean>(false);
    const [values, setValues] = useState(initialValues);

    const getAll = useCallback(async () => {
        const response = await api('/getAllPost', 'GET');

        const finalResponse = response.results.map(item => (
            ({
                ...item,
                cdate: formatDDMMYYYY(item.cdate),
                udate: formatDDMMYYYY(item.udate),
                expanded: false
            })
        ));

        setPostLst(finalResponse);
    }, [setPostLst]);

    const addPost = useCallback(async (post) => {
        await api('/addPost', 'POST', {
            data: {
                ...post
            }
        });

        setValues({ ...initialValues })
        setOperationSuccessful(true);
    }, [initialValues, setValues, setOperationSuccessful]);

    const updatePost = useCallback(async (post) => {
        const { title, description, likes, visits } = post;
        await api(`/updatePost/${post.id}`, 'PUT', {
            data: {
                title,
                description,
                likes,
                visits
            }
        });

        setValues({ ...initialValues })
        setOperationSuccessful(true);
    }, [initialValues, setValues, setOperationSuccessful]);

    const updateCounterPost = useCallback(async (post) => {
        const { title, description, likes, visits } = post;
        await api(`/updatePost/${post.id}`, 'PUT', {
            data: {
                title,
                description,
                likes,
                visits
            }
        });
    }, [api]);

    const deletePost = useCallback(async (id: string) => {
        await api(`/deletePost/${id}`, 'DELETE');
        setOperationSuccessful(true);
    }, [setOperationSuccessful]);

    const onExpanded = useCallback(async (index) => {
        const post = postsLst[index];
        const cloneLst = [...postsLst];
        if (!post.expanded) {
            post.visits++;
            updateCounterPost(post);
            cloneLst[index].visits = post.visits;
        }

        cloneLst[index].expanded = !postsLst[index].expanded
        setPostLst(cloneLst);

    }, [postsLst, setPostLst]);

    const onLike = useCallback(async (index) => {
        debugger
        const post = postsLst[index];
        const cloneLst = [...postsLst];
        post.likes++;
        updateCounterPost(post);
        cloneLst[index].likes = post.likes;
        setPostLst(cloneLst);

    }, [postsLst, setPostLst]);

    useEffect(() => {
        getAll();
        setOperationSuccessful(false)
    }, [operationSuccessful, setOperationSuccessful, getAll]);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return {
        postsLst,
        values,
        setValues,
        onExpanded,
        onLike,
        addPost,
        updatePost,
        deletePost,
        handleChange
    };
};
