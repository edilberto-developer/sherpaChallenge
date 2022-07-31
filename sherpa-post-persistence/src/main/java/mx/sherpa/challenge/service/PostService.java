package mx.sherpa.challenge.service;

import mx.sherpa.challenge.bean.PostUpdateBean;
import mx.sherpa.challenge.entity.PostEntity;
import mx.sherpa.challenge.exception.PostNotFoundException;
import mx.sherpa.challenge.repository.PostRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

import static mx.sherpa.challenge.util.Constants.POST_NOT_EXISTS;

/**
 * Service class
 *
 * @author Edilberto Ventura Camacho
 * @version 1.0
 * @since 1.0
 */
@ApplicationScoped
public class PostService implements IPostService {

    private static final Logger LOGGER = LoggerFactory.getLogger(PostService.class);

    @Inject
    private PostRepository postRepository;

    @Override
    public PostEntity getPostById(final long id) throws PostNotFoundException {
        return postRepository.findByIdOptional(id).orElseThrow(() ->
                new PostNotFoundException(POST_NOT_EXISTS));
    }

    @Override
    public List<PostEntity> getAllPosts() {
        LOGGER.info("Fetch all Posts");

        return postRepository.listAll();
    }

    @Transactional
    @Override
    public PostEntity updatePost(final long idPost, final PostUpdateBean post) throws PostNotFoundException {
        LOGGER.info("Update one Post:", idPost);

        PostEntity postFound = getPostById(idPost);
        postFound.setDescription(post.getDescription());
        postFound.setTitle(post.getTitle());
        postFound.setVisits(post.getVisits());
        postFound.setLikes(post.getLikes());
        postFound.setUdate(new Date());

        postRepository.persist(postFound);

        return postFound;
    }

    @Transactional
    @Override
    public PostEntity savePost(final PostEntity post) {
        LOGGER.info("Create one Post", post);
        post.setVisits(0);
        post.setLikes(0);
        post.setCdate(new Date());
        post.setUdate(new Date());
        postRepository.persistAndFlush(post);

        return post;
    }

    @Transactional
    @Override
    public void deletePost(final long id) throws PostNotFoundException {
        postRepository.delete(getPostById(id));
    }
}
