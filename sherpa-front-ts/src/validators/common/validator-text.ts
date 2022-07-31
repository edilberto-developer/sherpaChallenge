
export const validateText = (value) => {
    let error = undefined; const re = /[^A-Za-z0-9 ]/g;
    const result = re.test(String(value).toLowerCase());
    if (!result) {
        error = "Correo electrónico no válido";
    }

    return error;
}