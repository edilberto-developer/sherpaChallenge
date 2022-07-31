package mx.sherpa.challenge.exception;

public class UserNotActiveException extends Exception {
    public UserNotActiveException() {
        super();
    }
    public UserNotActiveException(final String message) {
        super(message);
    }
}
