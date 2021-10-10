package com.microservice.fundraiser.services;

import com.microservice.fundraiser.daos.DonationRepository;
import com.microservice.fundraiser.dtos.DonationDTO;
import com.microservice.fundraiser.entities.Donation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DonationService {
    @Autowired
    DonationRepository donationRepository;
    public List<Donation> getAllDonations() {
        return donationRepository.findAll();
    }

    public void addDonation(Donation donation) {
        donationRepository.save(donation);
    }

    public Optional<Donation> getDonation(int id) {
        return donationRepository.findById(id);
    }

    public Optional<List<Donation>> getDonationOfPost(int id) {
        return donationRepository.findByPost_Id(id);
    }
}
