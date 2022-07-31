export const validateEmail = (email) => {
    let error = undefined;

    if (!email) {
        error = "Email es requerico";

    } else {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const result = re.test(String(email).toLowerCase());
        if (!result) {
            error = "Correo electrónico no válido";
        }
    }

    return error;
}