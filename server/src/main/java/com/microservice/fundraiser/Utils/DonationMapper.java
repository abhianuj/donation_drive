package com.microservice.fundraiser.Utils;

import com.microservice.fundraiser.dtos.DonationDTO;
import com.microservice.fundraiser.dtos.PostDTO;
import com.microservice.fundraiser.dtos.UserDTO;
import com.microservice.fundraiser.entities.Donation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DonationMapper {
    @Autowired
    UserMapper userMapper;
    @Autowired
    PostMapper postMapper;

    public DonationDTO toDTO(Donation donation){
        DonationDTO donationDTO = new DonationDTO();
        donationDTO.setId(donation.getId());
        donationDTO.setAmount(donation.getAmount());
        PostDTO postDTO = postMapper.toDTO(donation.getPost());
        donationDTO.setPostDTO(postDTO);
        UserDTO userDTO = userMapper.toDTO(donation.getDonor());
        donationDTO.setDonor(userDTO);
        return donationDTO;
    }
}
