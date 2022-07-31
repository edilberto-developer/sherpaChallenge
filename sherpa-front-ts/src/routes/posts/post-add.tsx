import { Send } from '@mui/icons-material';
import {
    Button, FormControl, Grid, TextField, Typography
} from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { validatePostForm } from '../../validators';

export const PostAdd = ({ addPost, values, handleChange }) => {
    const initialValues = {
        title: { message: undefined, changed: false },
        description: { message: undefined, changed: false },
    }
    const [loading, setLoading] = useState(false);
    const [invalid, setInvalid] = useState(true);
    const [errors, setErrors] = useState(initialValues);

    const handleChangeAdd = (prop) => (event) => {
        handleChange(prop)(event);
        const cloneErrors = { ...errors }
        cloneErrors[prop].changed = true;
        setErrors(cloneErrors);
    };

    const onPublish = async () => {
        setLoading(true)
        await addPost({ ...values })
        setLoading(false)
        setErrors({...initialValues})
    }

    useEffect(() => {
        const cloneErrors = validatePostForm(values, { ...errors });
        setErrors(cloneErrors)
        const kesys = Object.keys(cloneErrors);
        const invalid = kesys.filter(key => cloneErrors[key].message !== undefined).length > 0;
        setInvalid(invalid)
    }, [values, setErrors])

    return (
        <Fragment>
            <Typography variant="h5">Comentar</Typography>

            <Grid container spacing={2} >
                <Grid item xs={6}>
                    <FormControl fullWidth variant="outlined">
                        <TextField
                            id="outlined-adornment-title"
                            required
                            error={errors.title.message !== undefined && errors.title.changed}
                            helperText={errors.title.changed ? errors.title.message : ''}
                            type='text'
                            value={values.title}
                            onChange={handleChangeAdd('title')}
                            label="Título"
                            variant="standard"
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={4}>
                    <Button onClick={onPublish} fullWidth
                        disabled={invalid || loading}
                        className='bg-primary' variant="contained"
                        endIcon={
                            <Send fontSize="small" />
                        }>
                        Publicar
                    </Button>
                </Grid>

                <Grid item xs={10}>
                    <FormControl fullWidth variant="outlined">
                        <TextField
                            id="outlined-multiline-static"
                            required
                            error={errors.description.message !== undefined && errors.description.changed}
                            helperText={errors.description.changed ? errors.description.message : ''}
                            label="Comentario"
                            type='text'
                            value={values.description}
                            multiline
                            rows={2}
                            onChange={handleChangeAdd('description')}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </Fragment>
    )
}
