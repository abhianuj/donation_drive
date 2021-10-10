package com.microservice.fundraiser.Utils;

import com.microservice.fundraiser.dtos.PostDTO;
import com.microservice.fundraiser.dtos.UserDTO;
import com.microservice.fundraiser.entities.Post;
import com.microservice.fundraiser.entities.User;
import org.springframework.stereotype.Service;

@Service
public class PostMapper {
    public PostDTO toDTO(Post post) {
        PostDTO postDTO = new PostDTO();
        UserDTO userDTO = new UserDTO();
        User user = post.getNeedy();
        postDTO.setCategory(post.getCategory());
        postDTO.setCause(post.getCause());
        postDTO.setId(post.getId());
        userDTO.setName(user.getName());
        userDTO.setEmail(user.getEmail());
        postDTO.setNeedy(userDTO);
        postDTO.setEndDate(post.getEndDate());
        postDTO.setNeededAmount(post.getNeededAmount());
        postDTO.setTitle(post.getTitle());
        postDTO.setPicture(post.getPicture());
        return postDTO;
    }
}
