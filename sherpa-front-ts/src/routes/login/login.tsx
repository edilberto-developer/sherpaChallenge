import { Fragment, useEffect, useState } from 'react';
import { sha512 } from 'js-sha512'
import {
  AccountCircle, Visibility, VisibilityOff
} from '@mui/icons-material';
import {
  Alert,
  Button, Card,
  CardActions, CardContent, CardMedia, Container, FormControl, IconButton, InputAdornment, Snackbar, TextField, Typography
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { api } from '../../api/api';
import { validateLoginForm } from '../../validators/validator-login';
import login from './../../images/login.png';

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const [errors, setErrors] = useState({
    email: { message: undefined, changed: false },
    password: { message: undefined, changed: false }
  });
  const [openError, setOpenError] = useState(false);
  const [invalid, setInvalid] = useState(true);
  const navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    const cloneErrors = { ...errors }
    cloneErrors[prop].changed = true;
    setErrors(cloneErrors);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onClickButton = async () => {
    setLoading(true)
    const response = await api('/token', 'POST', {
      data: {
        email: values.email,
        password: sha512(values.password)
      }
    });

    if (response.code) {
      setOpenError(true)
      setLoading(false)
    } else {
      localStorage.setItem('auth', JSON.stringify(response))
      navigate('/posts')
    }
  }

  useEffect(() => {
    const cloneErrors = validateLoginForm(values, { ...errors });
    setErrors(cloneErrors)
    const kesys = Object.keys(cloneErrors);
    const invalid = kesys.filter(key => cloneErrors[key].message !== undefined).length > 0;
    setInvalid(invalid)
  }, [values, setErrors])

  return (
    <Fragment>
      <Container maxWidth="sm" style={{ paddingTop: '5%' }}>
        <Card style={{ boxShadow: 'none' }}>
          <CardMedia
            component="img"
            height="194"
            image={login}
            alt="Paella dish" />
          <CardContent sx={{ marginLeft: '5%', marginRight: '5%' }} style={{ padding: '50px', paddingBottom: '20px' }}>
            <Typography gutterBottom variant="h5" component="div">
              Iniciar sesión
            </Typography>
            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
              <TextField
                id="outlined-adornment-title"
                type='text'
                error={errors.email.message !== undefined && errors.email.changed}
                helperText={errors.email.changed ? errors.email.message : ''}
                inputProps={{ maxLength: 150 }}
                value={values.email}
                onChange={handleChange('email')}
                label="Correo electrónico"
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
              <TextField
                id="outlined-adornment-title"
                error={errors.password.message !== undefined && errors.password.changed}
                helperText={errors.password.changed ? errors.password.message : ''}
                inputProps={{ maxLength: 150 }}
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                label="Contraseña"
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </CardContent>
          <CardActions sx={{ marginLeft: '10%', marginRight: '10%' }} style={{ paddingBottom: '50px' }}>
            <Button
              disabled={invalid || loading} onClick={onClickButton} className='bg-primary'
              variant="contained" fullWidth>Entrar</Button>
          </CardActions>
        </Card>
      </Container>
      <Snackbar open={openError} autoHideDuration={6000} onClose={() => setOpenError(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setOpenError(false)} severity="error" sx={{ width: '100%' }}>
          Ocurrio un erro al iniciar sesión
        </Alert>
      </Snackbar>
    </Fragment>
  );
}

export default Login;
