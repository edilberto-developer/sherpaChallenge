import { validateToken as verifyToken } from "./jwt";

export const isAdmin = async (token: string) => {
    let valid = false;
    try {
        if(await verifyToken(token)) {

        }
    } catch(error) {
        console.log()
    }

    return valid;
}