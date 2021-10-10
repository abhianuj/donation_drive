package com.microservice.fundraiser.daos;

import com.microservice.fundraiser.entities.Donation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DonationRepository extends JpaRepository<Donation, Integer> {
    Optional<List<Donation>> findByPost_Id(int id);
}