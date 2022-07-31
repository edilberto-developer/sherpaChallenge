package mx.sherpa.challenge.util;

import mx.sherpa.challenge.bean.ErrorResponse;

import javax.ws.rs.core.Response;

public class ResponseUtil {

    private ResponseUtil() {

    }

    public static final Response createErrorResponse(final String code, final String detail) {
        ErrorResponse error = new ErrorResponse();
        error.setCode(code);
        error.setDetail(detail);
        return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error).build();
    }
}
