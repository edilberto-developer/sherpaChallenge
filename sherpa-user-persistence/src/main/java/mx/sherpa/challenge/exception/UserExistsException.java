package mx.sherpa.challenge.exception;

public class UserExistsException extends Exception {

    public UserExistsException() {

    }

    public UserExistsException(final String message) {
        super(message);
    }
}
