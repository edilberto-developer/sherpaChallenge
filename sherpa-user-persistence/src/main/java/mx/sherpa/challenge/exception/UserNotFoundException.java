package mx.sherpa.challenge.exception;

import static mx.sherpa.challenge.util.Constants.USER_NOT_FOUND;

/**
 * @author Edilberto Ventura Camacho
 */
public class UserNotFoundException extends Exception {

    public UserNotFoundException() {
        super(USER_NOT_FOUND);
    }

    public UserNotFoundException(final String message) {
        super(message);
    }

    public UserNotFoundException(final String message, final Throwable t) {
        super(message, t);
    }
}
