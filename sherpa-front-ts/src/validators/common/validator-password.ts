export const validatePassword = (email) => {
    let error = undefined;

    if (!email) {
        error = "Campo requerico";

    } else if(email.trim().length < 8){
            error = "La contraseña debe contener por lo menos 8 caracteres";
        
    }

    return error;
}