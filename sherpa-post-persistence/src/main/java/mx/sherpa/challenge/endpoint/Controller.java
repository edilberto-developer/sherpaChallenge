package mx.sherpa.challenge.endpoint;

import mx.sherpa.challenge.bean.AllResponse;
import mx.sherpa.challenge.bean.DeleteSuccessful;
import mx.sherpa.challenge.bean.PostUpdateBean;
import mx.sherpa.challenge.entity.PostEntity;
import mx.sherpa.challenge.service.PostService;
import mx.sherpa.challenge.util.ResponseUtil;
import mx.sherpa.challenge.util.RestData;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.enums.SchemaType;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.parameters.RequestBody;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponses;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Endpoint class.
 *
 * @author Edilberto Ventura Camacho
 * @version 1.0
 * @since 1.0
 */
@Path("/api/post/persistence")
@Tag(name = "Post@1.0")
public class Controller {

    private static final Logger LOGGER = LoggerFactory.getLogger(Controller.class);

    @Inject
    PostService service;

    /**
     * Entrypoint for rest controller
     *
     * @return
     */
    @GET
    @Path("/all")
    @APIResponses(value = {
            @APIResponse(responseCode = RestData.CODE_200, description = RestData.DESCRIPTION, content = @Content(mediaType = RestData.CONTENT_TYPE, example = RestData.EXAMPLE_ALL)),
            @APIResponse(responseCode = RestData.CODE_500, description = RestData.DESCRIPTION_500, content = @Content(mediaType = RestData.CONTENT_TYPE, example = RestData.EXAMPLE_500_ALL))

    })
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = RestData.SUMMARY_ALL, description = RestData.SUMMARY_ALL)
    public Response service() {
        LOGGER.info("Payload getAll");
        try {
            List<PostEntity> Posts = service.getAllPosts();

            AllResponse response = new AllResponse();
            response.setFound(Posts.size());
            response.setResults(Posts);

            return Response.ok(response).build();
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
            return ResponseUtil.createErrorResponse("001.002.001", e.getMessage());
        }
    }

    /**
     * Entrypoint for rest controller
     *
     * @param id Contains the data
     * @return
     */
    @GET
    @Path("/one/{id}")
    @APIResponses(value = {
            @APIResponse(responseCode = RestData.CODE_200, description = RestData.DESCRIPTION, content = @Content(mediaType = RestData.CONTENT_TYPE, example = RestData.EXAMPLE_ONE)),
            @APIResponse(responseCode = RestData.CODE_500, description = RestData.DESCRIPTION_500, content = @Content(mediaType = RestData.CONTENT_TYPE, example = RestData.EXAMPLE_500_ONE))

    })
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = RestData.SUMMARY_ONE, description = RestData.SUMMARY_ONE)
    public Response findOne(@PathParam("id") long id) {
        LOGGER.info("Payload findOne", id);
        try {
            PostEntity Post = service.getPostById(id);

            return Response.ok(Post).build();
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
            return ResponseUtil.createErrorResponse("001.002.002", e.getMessage());
        }
    }

    /**
     * Entrypoint for rest controller
     *
     * @param post Contains the data
     * @return
     */
    @POST
    @Path("/save")
    @APIResponses(value = {
            @APIResponse(responseCode = RestData.CODE_200, description = RestData.DESCRIPTION, content = @Content(mediaType = RestData.CONTENT_TYPE, example = RestData.EXAMPLE_ADD)),
            @APIResponse(responseCode = RestData.CODE_500, description = RestData.DESCRIPTION_500, content = @Content(mediaType = RestData.CONTENT_TYPE, example = RestData.EXAMPLE_500_ADD))

    })
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = RestData.SUMMARY_ADD, description = RestData.SUMMARY_ADD)
    @RequestBody(content = @Content(mediaType = RestData.CONTENT_TYPE, schema = @Schema(type = SchemaType.OBJECT), example = RestData.REQUEST_ADD))
    public Response add(PostEntity post) {
        LOGGER.info("Payload save:", post);
        try {
            PostEntity PostCreated = service.savePost(post);

            return Response.ok(PostCreated).build();
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
            return ResponseUtil.createErrorResponse("001.002.003", e.getMessage());
        }
    }

    /**
     * Entrypoint for rest controller
     *
     * @param post Contains the data
     * @return
     */
    @PUT
    @Path("/update/{id}")
    @APIResponses(value = {
            @APIResponse(responseCode = RestData.CODE_200, description = RestData.DESCRIPTION, content = @Content(mediaType = RestData.CONTENT_TYPE, example = RestData.EXAMPLE_UPDATE)),
            @APIResponse(responseCode = RestData.CODE_500, description = RestData.DESCRIPTION_500, content = @Content(mediaType = RestData.CONTENT_TYPE, example = RestData.EXAMPLE_500_UPDATE))

    })
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = RestData.SUMMARY_UPDATE, description = RestData.SUMMARY_UPDATE)
    @RequestBody(content = @Content(mediaType = RestData.CONTENT_TYPE, schema = @Schema(type = SchemaType.OBJECT), example = RestData.REQUEST_UPDATE))
    public Response update(@PathParam("id") long id, @RequestBody PostUpdateBean post) {
        LOGGER.info("Payload update:", post);

        try {
            PostEntity PostCreated = service.updatePost(id, post);

            return Response.ok(PostCreated).build();
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
            return ResponseUtil.createErrorResponse("001.002.004", e.getMessage());
        }
    }

    /**
     * Entrypoint for rest controller
     *
     * @param id Contains the data
     * @return
     */
    @DELETE
    @Path("/delete/{id}")
    @APIResponses(value = {
            @APIResponse(responseCode = RestData.CODE_200, description = RestData.DESCRIPTION, content = @Content(mediaType = RestData.CONTENT_TYPE, example = RestData.EXAMPLE_DELETE)),
            @APIResponse(responseCode = RestData.CODE_500, description = RestData.DESCRIPTION_500, content = @Content(mediaType = RestData.CONTENT_TYPE, example = RestData.EXAMPLE_500_DELETE))

    })
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = RestData.SUMMARY_DELETE, description = RestData.SUMMARY_DELETE)
    public Response remove(@PathParam("id") long id) {
        LOGGER.info("Payload delete:", id);

        try {
            service.deletePost(id);

            return Response.ok(new DeleteSuccessful("OK")).build();
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
            return ResponseUtil.createErrorResponse("001.002.005", e.getMessage());
        }
    }
}
