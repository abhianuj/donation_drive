package com.microservice.fundraiser.controller;

import com.microservice.fundraiser.Utils.DonationMapper;
import com.microservice.fundraiser.dtos.DonationDTO;
import com.microservice.fundraiser.entities.Donation;
import com.microservice.fundraiser.entities.User;
import com.microservice.fundraiser.services.DonationService;
import com.microservice.fundraiser.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class DonorController {
    @Autowired
    DonationService donationService;
    @Autowired
    UserService userService;
    @Autowired
    DonationMapper donationMapper;

    public DonorController(DonationService donationService, UserService userService, DonationMapper donationMapper) {
        this.donationService = donationService;
        this.userService = userService;
        this.donationMapper = donationMapper;
    }

    @GetMapping("/api/donations")
    public List<DonationDTO> getAllDonations(){
        List<DonationDTO> donationDTOS = new ArrayList<>();
        List<Donation> donations = donationService.getAllDonations();
        for(Donation donation:donations){
            donationDTOS.add(donationMapper.toDTO(donation));
        }
        return donationDTOS;
    }
    @GetMapping("/api/donations/{id}")
    public ResponseEntity<DonationDTO> getDonation(@PathVariable int id){
        Optional<Donation> optionalDonation = donationService.getDonation(id);
        if(optionalDonation.isPresent()) {
            DonationDTO donationDTO = donationMapper.toDTO(optionalDonation.get());
            return new ResponseEntity<>(donationDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/api/donations/posts/{id}")
    public List<DonationDTO> getDonationOfPost(@PathVariable int id){
        Optional<List<Donation>> optionalDonations = donationService.getDonationOfPost(id);
        List<DonationDTO> donationDTOS = new ArrayList<>();
        if(optionalDonations.isPresent()){
            List<Donation> donations = optionalDonations.get();
            for(Donation donation:donations){
                donationDTOS.add(donationMapper.toDTO(donation));
            }
        }
        return donationDTOS;
    }
    @PostMapping("/api/donations")
    public ResponseEntity<Donation> addDonation(@RequestBody Donation donation, @RequestHeader String token){
        Optional<User> user = userService.getUserByToken(token);
        if(!user.isPresent())
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        donation.setDonor(user.get());
        donationService.addDonation(donation);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
