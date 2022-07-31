import { Grid } from '@mui/material';
import { Layout } from '../../components';
import { usePost } from '../../hooks/use-post';
import { isAdmin } from '../../util/user';
import { PostAdd } from './post-add';
import { PostList } from './posts-list';

export const Posts = () => {
    const { postsLst,
        values,
        setValues,
        onExpanded,
        onLike,
        addPost,
        updatePost,
        deletePost,
        handleChange } = usePost();

    return (
        <Layout>
            <Grid spacing={4} container flexDirection='column'>
                {isAdmin() &&
                    <Grid item>
                        <PostAdd addPost={addPost} values={values} handleChange={handleChange} />
                    </Grid>
                }
                <Grid item>
                    {
                        postsLst && <PostList postsLst={postsLst} onExpanded={onExpanded} onLike={onLike}
                            handleChange={handleChange} onEdit={updatePost} onDelete={deletePost}
                            setValues={setValues} values={values} />
                    }
                </Grid>
            </Grid>
        </Layout>
    )
}
