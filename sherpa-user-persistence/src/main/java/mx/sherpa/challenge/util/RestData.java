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

        public static final String DESCRIPTION = "Éxito";
        public static final String SUMMARY_ALL = "Recupera la lista de usuarios";
        public static final String EXAMPLE_ALL = "{\n" +
                "    \"found\": 1,\n" +
                "    \"results\": [\n" +
                "        {\n" +
                "            \"id\": 12,\n" +
                "            \"email\": \"algo@algo.com\",\n" +
                "            \"password\": \"Hash password\",\n" +
                "            \"name\": \"Edilberto\" ,\n" +
                "            \"lname\": \"Ventura\",\n" +
                "            \"sname\": \"Camacho\",\n" +
                "            \"cdate\": \"2022-07-31T00:00:00Z[UTC]\",\n" +
                "            \"udate\": \"2022-07-31T00:00:00Z[UTC]\",\n" +
                "            \"active\": \"Edilberto Ventura Camacho\"\n" +
                "        }\n" +
                "    ]\n" +
                "}";

        public static final String SUMMARY_ONE = "Recupera un usuario buscando por el identificador";
        public static final String EXAMPLE_ONE =
                "        {\n" +
                        "            \"id\": 12,\n" +
                        "            \"email\": \"algo@algo.com\",\n" +
                        "            \"password\": \"Hash password\",\n" +
                        "            \"name\": \"Edilberto\" ,\n" +
                        "            \"lname\": \"Ventura\",\n" +
                        "            \"sname\": \"Camacho\",\n" +
                        "            \"cdate\": \"2022-07-31T00:00:00Z[UTC]\",\n" +
                        "            \"udate\": \"2022-07-31T00:00:00Z[UTC]\",\n" +
                        "            \"active\": \"Edilberto Ventura Camacho\"\n" +
                        "        }";

        public static final String SUMMARY_ONE_EMAIL = "Recupera un usuario buscando por email";

        public static final String SUMMARY_ADD = "Guarda una publicación";
        public static final String EXAMPLE_ADD =
                "        {\n" +
                        "            \"id\": 12,\n" +
                        "            \"email\": \"algo@algo.com\",\n" +
                        "            \"password\": \"Hash password\",\n" +
                        "            \"name\": \"Edilberto\" ,\n" +
                        "            \"lname\": \"Ventura\",\n" +
                        "            \"sname\": \"Camacho\",\n" +
                        "            \"cdate\": \"2022-07-31T00:00:00Z[UTC]\",\n" +
                        "            \"udate\": \"2022-07-31T00:00:00Z[UTC]\",\n" +
                        "            \"active\": \"Edilberto Ventura Camacho\"\n" +
                        "        }";
        public static final String REQUEST_ADD =
                "        {\n" +
                        "            \"email\": \"algo@algo.com\",\n" +
                        "            \"password\": \"Hash password\",\n" +
                        "            \"name\": \"Edilberto\" ,\n" +
                        "            \"lname\": \"Ventura\",\n" +
                        "            \"sname\": \"Camacho\",\n" +
                        "            \"active\": \"true\"\n" +
                        "        }";

        public static final String SUMMARY_UPDATE = "Actualiza un usuario";
        public static final String EXAMPLE_UPDATE =
                "        {\n" +
                        "            \"email\": \"algo@algo.com\",\n" +
                        "            \"name\": \"Edilberto\" ,\n" +
                        "            \"lname\": \"Ventura\",\n" +
                        "            \"sname\": \"Camacho\",\n" +
                        "            \"active\": \"true\"\n" +
                        "        }";
        public static final String REQUEST_UPDATE =
                "        {\n" +
                        "            \"id\": 12,\n" +
                        "            \"email\": \"algo@algo.com\",\n" +
                        "            \"password\": \"Hash password\",\n" +
                        "            \"name\": \"Edilberto\" ,\n" +
                        "            \"lname\": \"Ventura\",\n" +
                        "            \"sname\": \"Camacho\",\n" +
                        "            \"cdate\": \"2022-07-31T00:00:00Z[UTC]\",\n" +
                        "            \"udate\": \"2022-07-31T00:00:00Z[UTC]\",\n" +
                        "            \"active\": \"Edilberto Ventura Camacho\"\n" +
                        "        }";

        public static final String SUMMARY_DELETE = "Elimina un usuario";
        public static final String EXAMPLE_DELETE =
                "        {\n" +
                        "            \"result\": \"OK\"\n" +
                        "        }";

        public static final String CODE_200 = "200";
        public static final String CODE_500 = "500";
        public static final String DESCRIPTION_500 = "Error por lógica o no controlado";

        public static final String EXAMPLE_500_ALL = "{\n" +
                "  \"code\": \"001.002.001\",\n" +
                "  \"detail\": \"Descripción del error\"\n" +
                "}";

        public static final String EXAMPLE_500_ONE = "{\n" +
                "  \"code\": \"001.002.002\",\n" +
                "  \"detail\": \"Descripción del error\"\n" +
                "}";

        public static final String EXAMPLE_500_ONE_EMAIL = "{\n" +
                "  \"code\": \"001.002.003\",\n" +
                "  \"detail\": \"Descripción del error\"\n" +
                "}";

        public static final String EXAMPLE_500_ADD = "{\n" +
                "  \"code\": \"001.002.004\",\n" +
                "  \"detail\": \"Descripción del error\"\n" +
                "}";

        public static final String EXAMPLE_500_UPDATE = "{\n" +
                "  \"code\": \"001.002.005\",\n" +
                "  \"detail\": \"Descripción del error\"\n" +
                "}";

        public static final String EXAMPLE_500_DELETE = "{\n" +
                "  \"code\": \"001.002.006\",\n" +
                "  \"detail\": \"Descripción del error\"\n" +
                "}";
}
