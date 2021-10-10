package com.microservice.fundraiser.daos;

import com.microservice.fundraiser.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Integer> {
}
