import { Grid } from '@mui/material';
import { Layout } from '../../components';
import { UsersList } from './users-list';

export const Users = () => (
    <Layout>
        <Grid spacing={4} container flexDirection='column'>
            <Grid item>
                {
                    <UsersList />
                }
            </Grid>
        </Grid>
    </Layout>
)
