package com.microservice.fundraiser.Utils;

import com.microservice.fundraiser.dtos.PostDTO;
import com.microservice.fundraiser.dtos.UserDTO;
import com.microservice.fundraiser.entities.Post;
import com.microservice.fundraiser.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostMapper {
    @Autowired
    UserMapper userMapper;

    public PostMapper(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public PostDTO toDTO(Post post) {
        PostDTO postDTO = new PostDTO();
        UserDTO userDTO = userMapper.toDTO(post.getNeedy());
        postDTO.setCategory(post.getCategory());
        postDTO.setCause(post.getCause());
        postDTO.setId(post.getId());
        postDTO.setNeedy(userDTO);
        postDTO.setEndDate(post.getEndDate());
        postDTO.setNeededAmount(post.getNeededAmount());
        postDTO.setTitle(post.getTitle());
        postDTO.setPicture(post.getPicture());
        return postDTO;
    }
}
