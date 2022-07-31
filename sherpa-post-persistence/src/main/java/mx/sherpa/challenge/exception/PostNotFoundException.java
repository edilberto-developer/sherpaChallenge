package mx.sherpa.challenge.exception;

import static mx.sherpa.challenge.util.Constants.POST_NOT_EXISTS;

/**
 * @author Edilberto Ventura Camacho
 */
public class PostNotFoundException extends Exception {

    public PostNotFoundException() {
        super(POST_NOT_EXISTS);
    }

    public PostNotFoundException(final String message) {
        super(message);
    }

    public PostNotFoundException(final String message, final Throwable t) {
        super(message, t);
    }
}
