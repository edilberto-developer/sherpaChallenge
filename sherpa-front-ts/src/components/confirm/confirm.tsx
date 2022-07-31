import { Button, Grid } from '@mui/material'
import { useState } from 'react'

export const Confirm = ({ onAcept, onCancel, message }) => {

    const [loading, setLoading] = useState(false)

    const onClickAcept= () => {
        setLoading(true)
        onAcept();
    }
    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                {message}
            </Grid>
            <Grid item xs={6}>
                <Button onClick={onCancel} fullWidth
                    variant="outlined">
                    Cancelar
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button onClick={onClickAcept} fullWidth
                    disabled={loading}
                    className='bg-primary' variant="contained">
                    Aceptar
                </Button>
            </Grid>
        </Grid>
    )
}
