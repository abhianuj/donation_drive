package com.microservice.fundraiser.controller;

import com.microservice.fundraiser.Utils.PostMapper;
import com.microservice.fundraiser.dtos.PostDTO;
import com.microservice.fundraiser.entities.Post;
import com.microservice.fundraiser.entities.User;
import com.microservice.fundraiser.services.PostService;
import com.microservice.fundraiser.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class PostsController {
    @Autowired
    PostService postService;
    @Autowired
    UserService userService;
    @Autowired
    PostMapper postMapper;

    @Autowired
    public PostsController(PostService postService, UserService userService, PostMapper postMapper) {
        this.postService = postService;
        this.userService = userService;
        this.postMapper = postMapper;
    }

    @GetMapping("/api/posts")
    public List<PostDTO> getAllPosts(){
        List<Post> posts = postService.getAllPosts();
        List<PostDTO> postDTOS = new ArrayList<>();
        for( Post post: posts){
            postDTOS.add(postMapper.toDTO(post));
        }
        return postDTOS;
    }
    @GetMapping("/api/posts/{postId}")
    public ResponseEntity<PostDTO> getPost(@PathVariable int postId){
        Optional<Post> optionalPost = postService.getPost(postId);
       if (optionalPost.isPresent()) {
           return new ResponseEntity<>(postMapper.toDTO(optionalPost.get()),HttpStatus.OK);
       } else {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       }
    }
    @PostMapping("/api/posts")
    public ResponseEntity<User> addPost(@RequestBody Post post, @RequestHeader String token) {
        Optional<User> user = userService.getUserByToken(token);
        if(!user.isPresent())
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        post.setNeedy(user.get());
        postService.addPost(post);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
