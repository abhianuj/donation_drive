package com.microservice.fundraiser.Utils;

import com.microservice.fundraiser.dtos.UserDTO;
import com.microservice.fundraiser.entities.User;
import org.springframework.stereotype.Service;

@Service
public class UserMapper {
    public UserDTO toDTO(User user){
        UserDTO userDTO = new UserDTO();
        userDTO.setName(user.getName());
        userDTO.setEmail(user.getEmail());
        return userDTO;
    }
    public User toEntity(UserDTO userDTO){
        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setName(userDTO.getName());
        user.setToken(userDTO.getToken());
        user.setToken(userDTO.getToken());
        return user;
    }
}
