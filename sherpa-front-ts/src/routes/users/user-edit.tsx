import { Upgrade } from '@mui/icons-material';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { useUser } from '../../hooks/use-user';
import { validateUserForm } from '../../validators';

export const UserEdit = ({ onClose, values, setValues }) => {
    const { updateUser } = useUser()
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

    const onEditUser = async () => {
        setLoading(true)
        await updateUser(values)
        onClose()
    }

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
                Editar Usuario
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
                    required
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
                <Button onClick={onEditUser} fullWidth
                    disabled={invalid || loading}
                    className='bg-primary' variant="contained"
                    endIcon={
                        <Upgrade fontSize="small" />
                    }>
                    Actualizar
                </Button>
            </Grid>
        </Fragment>
    );
}
