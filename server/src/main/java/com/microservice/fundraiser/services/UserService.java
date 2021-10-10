package com.microservice.fundraiser.services;

import com.microservice.fundraiser.daos.UserRepository;
import com.microservice.fundraiser.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public Optional<User> getUser(String email) {
        return userRepository.findById(email);
    }
    public void postUser(User user) {
        userRepository.save(user);
    }

    public Optional<User> login(User user) {
        Optional<User> optionalUser = userRepository.findFirstByEmailAndPassword(user.getEmail(),user.getPassword());
        if(optionalUser.isPresent()) {
            String token = UUID.randomUUID().toString();
            user = optionalUser.get();
            user.setToken(token);
            userRepository.save(user);
        }
        return optionalUser;
    }

    public Optional<User> getUserByToken(String token) {
        return userRepository.findFirstByToken(token);
    }
}
