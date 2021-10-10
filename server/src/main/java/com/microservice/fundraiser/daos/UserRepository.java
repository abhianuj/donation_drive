package com.microservice.fundraiser.daos;
import com.microservice.fundraiser.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findFirstByEmailAndPassword(String email, String password);
    Optional<User> findFirstByToken(String token);
}
