import { AUTH } from './key-storage';

export const isAdmin = () =>{
    const auth = JSON.parse(localStorage.getItem(AUTH));

    return auth && auth.user.roleId === 1;
}