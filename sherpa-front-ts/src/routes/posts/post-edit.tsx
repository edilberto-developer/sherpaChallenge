import { Send } from '@mui/icons-material';
import { Button, FormControl, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { validatePostForm } from '../../validators';

export const PostEdit = ({ values, handleChange, onEdit, onClose }) => {
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

    const onFinishEdit = async () => {
        await onEdit(values)
        onClose(false);
    }

    useEffect(() => {
        const cloneErrors = validatePostForm(values, { ...errors });
        setErrors(cloneErrors)
        const kesys = Object.keys(cloneErrors);
        const invalid = kesys.filter(key => cloneErrors[key].message !== undefined).length > 0;
        setInvalid(invalid)
    }, [values, setErrors])

    return (
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <TextField
                        id="outlined-adornment-title"
                        required
                        error={errors.title.message !== undefined && errors.title.changed}
                        helperText={errors.title.changed ? errors.title.message : ''}
                        type='text'
                        value={values.title}
                        onChange={handleChange('title')}
                        label="Título"
                        variant="standard"
                    />
                </FormControl>
            </Grid>

            <Grid item xs={12}>
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
                        onChange={handleChange('description')}
                    />
                </FormControl>
            </Grid>

            <Grid item xs={4}>
                <Button onClick={onFinishEdit} fullWidth
                    className='bg-primary' variant="contained"
                    endIcon={
                        <Send fontSize="small" />
                    }>
                    Guardar
                </Button>
            </Grid>
        </Grid>
    )
}
