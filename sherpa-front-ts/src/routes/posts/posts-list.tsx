import { Delete, Edit, ThumbUp, Visibility, ExpandMore } from '@mui/icons-material';
import {
    Accordion, AccordionDetails, AccordionSummary, Badge, BadgeProps, BottomNavigation, BottomNavigationAction, Box, IconButton, styled, Typography
} from '@mui/material';
import { Fragment } from 'react';
import { Confirm } from '../../components/confirm/confirm';
import { ModalWrapper } from '../../components/modal/modal';
import { isAdmin } from '../../util/user';
import { PostEdit } from './post-edit';
import { useState } from 'react'

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export const PostList = ({ postsLst, onExpanded, onLike, setValues, values, handleChange, onEdit, onDelete }) => {
    const [open, setOpen] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);

    const closeModalEdit = () => {
        setValues(undefined)
        setOpen(false)
    }

    const onOpenEdit = (post) => {
        setOpen(true)
        setValues(post)
    }

    const onOpenConfirm = (post) => {
        setOpenConfirm(true)
        setValues(post)
    }

    const onDeleteConfirm = async () => {
        await onDelete(values.id)
        setOpenConfirm(false);
    }

    return (
        <Fragment>
            <Box style={{ marginTop: '20px' }}>
                <Typography variant="h5" style={{ marginBottom: '20px' }}>Publicaciones</Typography>
                {postsLst &&
                    postsLst.map((post, index) => (
                        <Accordion style={{ width: '100%', marginBottom: '10px' }}
                            key={post.id} expanded={post.expanded}
                            onChange={() => onExpanded(index)}>
                            <AccordionSummary
                                expandIcon={<IconButton aria-label="cart">
                                    <ExpandMore />
                                </IconButton>}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                className={post.expanded ? 'bg-secundary' : ''}
                            >
                                <Typography sx={{ width: '70%', flexShrink: 0 }}>
                                    {post.title}
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>{post.user} / {post.udate}</Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{ width: '100%' }}>
                                <Typography>
                                    {post.description}
                                </Typography>
                            </AccordionDetails>

                            <BottomNavigation showLabels>
                                <BottomNavigationAction icon={
                                    <StyledBadge badgeContent={post.visits} color="secondary">
                                        <Visibility />
                                    </StyledBadge>
                                } />
                                <BottomNavigationAction icon={
                                    <IconButton onClick={() => onLike(index)} aria-label="cart">
                                        <StyledBadge badgeContent={post.likes} color="secondary">
                                            <ThumbUp />
                                        </StyledBadge>
                                    </IconButton>
                                } />
                                {isAdmin() && <Fragment>
                                    <BottomNavigationAction icon={
                                        <IconButton onClick={() => onOpenEdit(post)} aria-label="Edit">
                                            <Edit />
                                        </IconButton>
                                    } />
                                    <BottomNavigationAction icon={
                                        <IconButton onClick={() => onOpenConfirm(post)} aria-label="delete">
                                            <Delete />
                                        </IconButton>
                                    } />
                                </Fragment>
                                }
                            </BottomNavigation>
                        </Accordion>
                    ))
                }
            </Box>

            <ModalWrapper open={open} onClose={closeModalEdit}>
                <PostEdit values={values} handleChange={handleChange} onEdit={onEdit} onClose={setOpen} />
            </ModalWrapper>

            <ModalWrapper open={openConfirm} onClose={onOpenConfirm}>
                <Confirm onCancel={() => setOpenConfirm(false)} onAcept={onDeleteConfirm}
                    message='¿Estás seguro de elimiar la publicación?' />
            </ModalWrapper>
        </Fragment>
    )
};