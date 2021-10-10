package com.microservice.fundraiser.services;

import com.microservice.fundraiser.daos.PostRepository;
import com.microservice.fundraiser.entities.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    @Autowired
    PostRepository postRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public void addPost(Post post) {
        postRepository.save(post);
    }

    public Optional<Post> getPost(int postId) {
        return postRepository.findById(postId);
    }
}
