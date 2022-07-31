import { Delete, Edit } from '@mui/icons-material';
import { BottomNavigationAction, Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import { Confirm } from '../../components/confirm/confirm';
import { ModalWrapper } from '../../components/modal/modal';
import { useUser } from '../../hooks/use-user';
import { UserAdd } from './user-add';
import { UserEdit } from './user-edit';

export const UsersList = () => {
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);

    const {
        initialValues,
        usersLst,
        values,
        setValues,
        deleteUser,
        setOperationSuccessful } = useUser();


    const closeModalAdd = () => {
        setValues({...initialValues})
        setOpenAdd(false)
        setOperationSuccessful(true)
    }

    const closeModalEdit = () => {
        setValues({...initialValues})
        setOpenEdit(false)
        setOperationSuccessful(true)
    }

    const onOpenAdd = () => {
        setOpenAdd(true)
    }

    const onOpenEdit = (post) => {
        setOpenEdit(true)
        setValues(post)
    }

    const onOpenConfirm = (post) => {
        setOpenConfirm(true)
        setValues(post)
    }

    const onDeleteConfirm = async () => {
        await deleteUser(values.id)
        setOpenConfirm(false);
        setOperationSuccessful(true)
    }

    return (
        <Fragment>
            <Button onClick={onOpenAdd} className='bg-primary' fullWidth variant="contained">
                Agregar
            </Button>
            <Box style={{ marginTop: '25px' }}>
                <Typography variant="h5" style={{ marginBottom: '20px' }}>Usuarios</Typography>

                <TableContainer component={Paper}>
                    {usersLst && <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Nombre</TableCell>
                                <TableCell align="right">Primer apellido</TableCell>
                                <TableCell align="right">Segundo apellido</TableCell>
                                <TableCell align="right">Correo electrónico</TableCell>
                                <TableCell align="right">Rol</TableCell>
                                <TableCell align="center">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {usersLst.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.lname}</TableCell>
                                    <TableCell align="right">{row.sname}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.roleId === 1 ? 'Administrador' : 'Usuario'}</TableCell>
                                    <TableCell align='center'>
                                        <BottomNavigationAction icon={
                                            <IconButton onClick={() => onOpenEdit(row)} aria-label="Edit">
                                                <Edit />
                                            </IconButton>
                                        } />
                                        <BottomNavigationAction icon={
                                            <IconButton onClick={() => onOpenConfirm(row)} aria-label="delete">
                                                <Delete />
                                            </IconButton>
                                        } />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    }
                </TableContainer>
            </Box>

            <ModalWrapper open={openAdd} onClose={closeModalAdd}>
                <UserAdd onClose={closeModalAdd} setValues={setValues} values={values} />
            </ModalWrapper>

            <ModalWrapper open={openEdit} onClose={closeModalEdit}>
                <UserEdit onClose={closeModalEdit} values={values} setValues={setValues} />
            </ModalWrapper>

            <ModalWrapper open={openConfirm} onClose={onOpenConfirm}>
                <Confirm onCancel={() => setOpenConfirm(false)} onAcept={onDeleteConfirm}
                    message='¿Estás seguro de elimiar al usuario?' />
            </ModalWrapper>
        </Fragment>
    )
};