package com.microservice.fundraiser.controller;

import com.microservice.fundraiser.Utils.UserMapper;
import com.microservice.fundraiser.dtos.UserDTO;
import com.microservice.fundraiser.entities.User;
import com.microservice.fundraiser.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    UserMapper userMapper;

    @GetMapping("/api/users")
    public List<User> getAllUser(){
        return userService.getAllUsers();
    }
//    @GetMapping("/api/users/{email}")
//    public ResponseEntity<UserDTO> getUser(@PathVariable String email) {
//        User user;
//        UserDTO userDTO;
//        if(userService.getUser(email).isPresent()) {
//            user = userService.getUser(email).get();
//            userDTO = userMapper.toDTO(user);
//            return new ResponseEntity<>(userDTO, HttpStatus.OK);
//        }
//        else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
    @PostMapping("/api/users")
    public ResponseEntity<UserDTO> addUser(@RequestBody User user) {
        UserDTO userDTO = userMapper.toDTO(userService.postUser(user));
        userDTO.setToken(user.getToken());
        return new ResponseEntity<>(userDTO,HttpStatus.OK);
    }
    @PostMapping("/api/users/login")
    public ResponseEntity<UserDTO> login(@RequestBody User user) {
        if(userService.login(user).isPresent()) {
            user = userService.login(user).get();
            UserDTO userDTO = userMapper.toDTO(user);
            userDTO.setToken(user.getToken());
            return new ResponseEntity<>(userDTO,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}
