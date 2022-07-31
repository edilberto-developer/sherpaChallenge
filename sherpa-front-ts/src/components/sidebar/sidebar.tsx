import {
    GroupOutlined, MessageOutlined
} from '@mui/icons-material';
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import { Fragment } from 'react';
import { isAdmin } from '../../util/user';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <MenuList>
            <MenuItem onClick={() => navigate('/posts')}>
                <ListItemIcon>
                    <MessageOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText>Publicaciones</ListItemText>
            </MenuItem>
            <Divider />
            {
                isAdmin() &&
                <MenuItem onClick={() => navigate('/users')}>
                    <ListItemIcon>
                        <GroupOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Usuarios</ListItemText>
                </MenuItem>
            }
        </MenuList >
    )
}


export default Sidebar;