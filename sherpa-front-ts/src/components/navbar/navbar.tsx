import { AppBar, Button, Container, Grid, Typography } from '@mui/material';
import { AUTH } from '../../util/key-storage';
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem(AUTH));

    return (
        <AppBar position="fixed" className="bg-primary" style={{ paddingBottom: '15px', paddingTop: '15px' }}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={6}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'inline-block' },
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Sherpa Social
                        </Typography>
                    </Grid>

                    <Grid item xs={5} alignContent='flex-end'>
                        <Typography
                            variant="body2"
                            textAlign={'right'}
                            sx={{
                                mr: 2,
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {`${auth.user.name} ${auth.user.lname} ${auth.user.sname}`}
                        </Typography>
                    </Grid>

                    <Grid item xs={1}>
                    <Typography
                            variant="body2"
                            textAlign={'right'}
                            onClick={() => {
                                localStorage.clear();
                                navigate('/')
                            } }
                            sx={{
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            Salir
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    );
}

export default NavBar