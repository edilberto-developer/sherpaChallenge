package mx.sherpa.challenge.util;

/**
 * RestData class that contains the rest values used in the service request and
 * response.
 *
 * @author Edilberto Ventura Camacho
 * @version 1.0
 * @since 1.0
 */
public final class RestData {
        
        private RestData(){
        }

        public static final String CONTENT_TYPE = "application/json";

        public static final String CODE_SERVICE = "[SERVICE-DOMAIN-CODE].[SERVICE-CODE].";

        public static final String REQUEST = "{ \n " + "	\"data\" : {} \n " + "} ";
        public static final String SUMMARY = "This method is used to [....]";
        public static final String GENERAL_DESCRIPTION = "This method is used to [....]. The answer is an OK response or a BAD response if an exception occurred.";

        public static final String CODE_200 = "200";
        public static final String DESCRIPTION = "Response successful";
        public static final String EXAMPLE = "{ \n " + "    \"data\": { \n     }, \n " + "    \"response\": \"OK\" \n " + "} ";

        public static final String CODE_400 = "400";
        public static final String DESCRIPTION_400 = "Service error";
        public static final String CODE_400_NT = "000";
        public static final String DETAIL_400 = "service_error";
        public static final String EXAMPLE_400 = "{\n" + "    \"data\": {\n" + "        \"exception\": {\n"
                        + "            \"code\": \"" + CODE_SERVICE + CODE_400_NT + "\",\n"
                        + "            \"detail\": \"" + DETAIL_400 + "\"\n" + "        }\n" + "    },\n"
                        + "    \"response\": \"BAD\"\n" + "}";
}
