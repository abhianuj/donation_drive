package com.microservice.fundraiser.controller;

import com.microservice.fundraiser.Utils.PostMapper;
import com.microservice.fundraiser.entities.Post;
import com.microservice.fundraiser.entities.User;
import com.microservice.fundraiser.services.PostService;
import com.microservice.fundraiser.services.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(MockitoJUnitRunner.class)
class PostsControllerTest {

    private PostService postService;
    private UserService userService;
    private PostMapper postMapper;
    private Post post;
    private Optional<Post> oPost = null;
    private Optional<Post> oPost2 = null;
    private List<Post> lPost = new ArrayList<>();
    private User user;
    private Optional<User> oUser = null;
    private Optional<User> oUser2 = null;

    private Date date;
    private byte[] pic;

    @Autowired
    @InjectMocks
    public PostsController postsController;

    @BeforeEach
    public void setup() {
        postService = Mockito.mock(PostService.class);
        userService = Mockito.mock(UserService.class);
        postMapper = Mockito.mock(PostMapper.class);
        postsController = new PostsController(postService, userService, postMapper);

        user = new User(
                "utpal03@gmail.com",
                "Utpal",
                "Gaurav",
                "123456",
                "t01234"
        );

        post = new Post(
                1,
                "Cancer",
                pic,
                user,
                "Cancer",
                (long) 10,
                date,
                "Medical"
        );

        lPost.add(post);
        oPost = Optional.of(post);
        oPost2 = Optional.empty();
        oUser = Optional.of(user);
        oUser2 = Optional.empty();
    }

    @Test
    void getAllPosts() {
        Mockito.lenient().when(postService.getAllPosts()).thenReturn(lPost);
        postsController.getAllPosts();
    }

    @Test
    void getPost() {
        int postId=1;
        Mockito.lenient().when(postService.getPost(postId)).thenReturn(oPost);

        postsController.getPost(1);
    }

    @Test
    void addPost() {
        String token = "t01234";
        Mockito.lenient().when(userService.getUserByToken(token)).thenReturn(oUser);
//        Mockito.lenient().when(!user.isPresent()).thenReturn();
//
        postsController.addPost(post, token);
    }
}