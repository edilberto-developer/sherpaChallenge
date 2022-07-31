import { validateEmail } from "./common/validator-email";
import { validatePassword } from "./common/validator-password";
import { validateRequired } from "./common/validator-required";

export const validateUserForm = (values, cloneErrors) => {
    const errorEmail = validateEmail(values.email);
    const errorPassword = validatePassword(values.password);
    const errorName = validateRequired(values.name);
    const errorLname = validateRequired(values.lname);

    cloneErrors.email.message = errorEmail;
    cloneErrors.password.message = errorPassword;
    cloneErrors.name.message = errorName;
    cloneErrors.lname.message = errorLname;

    return cloneErrors;
}
