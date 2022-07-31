
export const validateTextRequired = (value) => {
    let error = undefined;

    if (!value || value.trim() === '') {
        error = "Email es requerico";

    } else {
        const re = /^[A-Za-z]/g;
        const result = re.test(String(value).toLowerCase());
        if (!result) {
            error = "Formato invalido, sólo se permiten letras";
        }
    }
    
    return error;
}