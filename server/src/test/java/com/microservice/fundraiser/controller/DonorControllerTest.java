package com.microservice.fundraiser.controller;

import com.microservice.fundraiser.Utils.DonationMapper;
import com.microservice.fundraiser.Utils.PostMapper;
import com.microservice.fundraiser.dtos.DonationDTO;
import com.microservice.fundraiser.dtos.UserDTO;
import com.microservice.fundraiser.entities.Donation;
import com.microservice.fundraiser.entities.Post;
import com.microservice.fundraiser.entities.User;
import com.microservice.fundraiser.services.DonationService;
import com.microservice.fundraiser.services.PostService;
import com.microservice.fundraiser.services.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class DonorControllerTest {

    private DonationService donationService;
    private UserService userService;
    private DonationMapper donationMapper;

    private Donation donation;
    private DonationDTO donationDTO;
    private List<Donation> lDonation = new ArrayList<>();
    private List<DonationDTO> lDTOS = new ArrayList<>();
    private Optional<Donation> oDonation = null;
    private Optional<List<Donation>> loDonations = null;
    private User user;
    private Optional<User> oUser = null;
    private Post post;


    @Autowired
    @InjectMocks
    DonorController donorController;

    @BeforeEach
    public void setup() {
        donationService = Mockito.mock(DonationService.class);
        userService = Mockito.mock(UserService.class);
        donationMapper = Mockito.mock(DonationMapper.class);

        donorController = new DonorController(donationService, userService, donationMapper);

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

        oDonation = Optional.of(donation);
        loDonations = Optional.of(lDonation);
        oUser = Optional.of(user);
        donationDTO = Mockito.mock(DonationDTO.class);
    }

    @Test
    void getAllDonations() {
        Mockito.lenient().when(donationService.getAllDonations()).thenReturn(lDonation);

        donorController.getAllDonations();
    }

    @Test
    void getDonation() {
        int id=1;
        Mockito.lenient().when(donationMapper.toDTO(oDonation.get())).thenReturn(donationDTO);
        Mockito.lenient().when(donationMapper.toDTO(oDonation.get())).thenReturn(donationDTO);

        donorController.getDonation(1);
    }

    @Test
    void getDonationOfPost() {
        int id=1;
        Mockito.lenient().when(donationService.getDonationOfPost(id)).thenReturn(loDonations);
//        Mockito.lenient().when(oDonation.get()).thenReturn(donation);

        donorController.getDonationOfPost(id);
    }

    @Test
    void addDonation() {
        Mockito.lenient().when(userService.getUserByToken(user.getToken())).thenReturn(oUser);

        donorController.addDonation(donation, user.getToken());
    }
}