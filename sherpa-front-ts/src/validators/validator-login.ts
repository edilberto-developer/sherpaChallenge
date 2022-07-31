import { validateEmail } from "./common/validator-email";
import { validateRequired } from "./common/validator-required";

export const validateLoginForm = (values, cloneErrors) => {
    const errorEmail = validateEmail(values.email);
    const errorPassword = validateRequired(values.password);

    cloneErrors.email.message = errorEmail;
    cloneErrors.password.message = errorPassword;

    return cloneErrors;
}
