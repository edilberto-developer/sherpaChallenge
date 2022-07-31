package mx.sherpa.challenge.service;

import mx.sherpa.challenge.bean.PostUpdateBean;
import mx.sherpa.challenge.entity.PostEntity;
import mx.sherpa.challenge.exception.PostNotFoundException;

import java.util.List;

public interface IPostService {
    PostEntity getPostById(long id) throws PostNotFoundException;

    List<PostEntity> getAllPosts();

    PostEntity updatePost(final long idPost, final PostUpdateBean post) throws PostNotFoundException;

    PostEntity savePost(PostEntity post);

    void deletePost(long id) throws PostNotFoundException;
}
