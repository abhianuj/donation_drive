package com.microservice.fundraiser.controller;

import com.microservice.fundraiser.Utils.UserMapper;
import com.microservice.fundraiser.dtos.UserDTO;
import com.microservice.fundraiser.entities.User;
import com.microservice.fundraiser.services.UserService;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import javax.swing.plaf.PanelUI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
class UserControllerTest {

    @Autowired
    private UserMapper userMapper;
    private UserService userService;
    private UserDTO userDTO;

    private User user;
    private Optional<User> oUser = null;
    private Optional<User> oUser2 = null;
    private List<User> lUser = new ArrayList<>();


    @Autowired
    @InjectMocks
    private UserController underTest;


    @BeforeEach
    public void setup()
    {
        userMapper = Mockito.mock(UserMapper.class);
        userService = Mockito.mock(UserService.class);
        userDTO = Mockito.mock(UserDTO.class);
        underTest= new UserController(userService, userMapper);

        user = new User(
                "utpal03@gmail.com",
                "Utpal",
                "Gaurav",
                "123456",
                "t01234"
        );

//        oUser = Mockito.mock(Optional.class);
//        oUser = new Optional<User>();
        oUser = Optional.of(user);
        oUser2 = Optional.empty();
        lUser.add(user);
    }
    @Test
    public void addUser() {

        //given
       Mockito.lenient().when(userService.postUser(user)).thenReturn(user);
        Mockito.lenient().when(userMapper.toDTO(user)).thenReturn(userDTO);

//        Mockito.doReturn(user).when(userService.postUser(user));
//        Mockito.doReturn(userDTO).when(userMapper.toDTO(user));

        underTest.addUser(user);

    }

    @Test
    public void login() {

        Mockito.lenient().when(userService.login(user)).thenReturn(oUser);
        Mockito.lenient().when(userMapper.toDTO(user)).thenReturn(userDTO);
//        Mockito.lenient().when(oUser.isPresent()).thenReturn(true);
//        Mockito.lenient().when(oUser.get()).thenReturn(user);

        underTest.login(user);
        Mockito.lenient().when(userService.login(user)).thenReturn(oUser2);
        underTest.login(user);
    }

    @Test
    public void getAllUser() {
        Mockito.lenient().when(userService.getAllUsers()).thenReturn(lUser);
        underTest.getAllUser();
    }

}