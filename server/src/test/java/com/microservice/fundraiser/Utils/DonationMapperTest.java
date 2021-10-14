package com.microservice.fundraiser.Utils;

import com.microservice.fundraiser.dtos.PostDTO;
import com.microservice.fundraiser.dtos.UserDTO;
import com.microservice.fundraiser.entities.Donation;
import com.microservice.fundraiser.entities.Post;
import com.microservice.fundraiser.entities.User;
import com.microservice.fundraiser.services.DonationService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(MockitoJUnitRunner.class)
class DonationMapperTest {
    DonationMapper donationMapper;
    UserMapper userMapper;
    PostMapper postMapper;
    Donation donation;
    PostDTO postDTO;
    UserDTO userDTO;
    User user;
    Post post;
    private Date date;
    private byte[] pic;

    @BeforeEach
    public void setup() {
        userMapper = Mockito.mock(UserMapper.class);
        postMapper = Mockito.mock(PostMapper.class);
        donationMapper = new DonationMapper(userMapper, postMapper);

        donation = new Donation(
                1,
                post,
                user,
                100
        );

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
    }

    @Test
    void toDTO() {
        Mockito.lenient().when(postMapper.toDTO(donation.getPost())).thenReturn(postDTO);
        Mockito.lenient().when(userMapper.toDTO(donation.getDonor())).thenReturn(userDTO);

        donationMapper.toDTO(donation);
    }
}