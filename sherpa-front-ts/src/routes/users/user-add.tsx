import { Save, Visibility, VisibilityOff } from '@mui/icons-material';
import {
    Button,
    FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography
} from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { useUser } from '../../hooks/use-user';
import { sha512 } from 'js-sha512';
import { validateUserForm } from '../../validators';

export const UserAdd = ({ onClose, values, setValues }) => {
    const { addUser } = useUser()
    const [showPassword, setShowPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [invalid, setInvalid] = useState(true);
    const [errors, setErrors] = useState({
        email: { message: undefined, changed: false },
        password: { message: undefined, changed: false },
        name: { message: undefined, changed: false },
        lname: { message: undefined, changed: false },
        sname: { message: undefined, changed: false },
        roleId: { message: undefined, changed: false },
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        const cloneErrors = { ...errors }
        cloneErrors[prop].changed = true;
        setErrors(cloneErrors);
    };

    const onAddUser = async () => {
        setLoading(true)
        const copia = { ...values };
        copia.password = sha512(copia.password)

        await addUser(copia)
        onClose()
    }

    const handleClickShowPassword = () => {
        setShowPassword(showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        const cloneErrors = validateUserForm(values, { ...errors });
        setErrors(cloneErrors)
        const kesys = Object.keys(cloneErrors);
        const invalid = kesys.filter(key => cloneErrors[key].message !== undefined).length > 0;
        setInvalid(invalid)
    }, [values, setErrors])

    return (
        <Fragment>
            <Typography gutterBottom variant="h5" component="div">
                Agregar Usuario
            </Typography>
            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <TextField
                    id="outlined-adornment-email"
                    type='text'
                    required
                    error={errors.email.message !== undefined && errors.email.changed}
                    helperText={errors.email.changed ? errors.email.message : ''}
                    value={values.email}
                    onChange={handleChange('email')}
                    label="Correo electrónico"
                    variant="standard"
                />
            </FormControl>

            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <TextField
                    id="outlined-adornment-password"
                    required
                    error={errors.password.message !== undefined && errors.password.changed}
                    helperText={errors.password.changed ? errors.password.message : ''}
                    type={showPassword ? 'text' : 'password'}
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
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>
            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <TextField
                    id="outlined-adornment-name"
                    required
                    error={errors.name.message !== undefined && errors.name.changed}
                    helperText={errors.name.changed ? errors.name.message : ''}
                    type='text'
                    value={values.name}
                    onChange={handleChange('name')}
                    label="Nombre"
                    variant="standard"
                />
            </FormControl>

            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <TextField
                    id="outlined-adornment-lname"
                    required
                    error={errors.lname.message !== undefined && errors.lname.changed}
                    helperText={errors.lname.changed ? errors.lname.message : ''}
                    type='text'
                    value={values.lname}
                    onChange={handleChange('lname')}
                    label="Primer apellido"
                    variant="standard"
                />
            </FormControl>

            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <TextField
                    id="outlined-adornment-sname"
                    type='text'
                    value={values.sname}
                    onChange={handleChange('sname')}
                    label="Segundo apellido"
                    variant="standard"
                />
            </FormControl>

            <FormControl fullWidth variant="outlined" style={{ marginTop: '25px' }}>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                    labelId="outlined-adornment-roleId"
                    id="demo-simple-select"
                    value={values.roleId}
                    label="Role"
                    onChange={handleChange('roleId')}
                >
                    <MenuItem value={1}>Administrador</MenuItem>
                    <MenuItem value={2}>Usuario</MenuItem>
                </Select>
            </FormControl>

            <Grid item xs={4} style={{ marginTop: '30px' }}>
                <Button disabled={invalid || loading}
                    onClick={onAddUser} fullWidth
                    className='bg-primary' variant="contained"
                    endIcon={
                        <Save fontSize="small" />
                    }>
                    Guardar
                </Button>
            </Grid>
        </Fragment>
    )
}
