package com.microservice.fundraiser.Utils;

import com.microservice.fundraiser.dtos.UserDTO;
import com.microservice.fundraiser.entities.Post;
import com.microservice.fundraiser.entities.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(MockitoJUnitRunner.class)
class PostMapperTest {
    PostMapper postMapper;
    UserMapper userMapper;
    Post post;
    UserDTO userDTO;
    User user;
    private Date date;
    private byte[] pic;

    @BeforeEach
    public void setup() {
        userMapper = Mockito.mock(UserMapper.class);

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

        postMapper = new PostMapper(userMapper);
    }

    @Test
    void toDTO() {
        Mockito.lenient().when(userMapper.toDTO(post.getNeedy())).thenReturn(userDTO);

        postMapper.toDTO(post);
    }
}