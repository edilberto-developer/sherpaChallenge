export const validateRequired = (email) => {
    let error = undefined;

    if (!email) {
        error = "Campo requerido";
    } 

    return error;
}