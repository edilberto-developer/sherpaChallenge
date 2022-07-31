import { validateRequired } from "./common/validator-required";

export const validatePostForm = (values, cloneErrors) => {
    const errorTitle = validateRequired(values.title);
    const errorDescription= validateRequired(values.description);

    cloneErrors.title.message = errorTitle;
    cloneErrors.description.message = errorDescription;

    return cloneErrors;
}
