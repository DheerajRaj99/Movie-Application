package com.springboot.jpa.service;

import com.springboot.jpa.model.UserImage;
import com.springboot.jpa.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageServiceImpl implements ImageService{


    private ImageRepository imageRepository;

    @Autowired
    public ImageServiceImpl(ImageRepository imageRepository)
    {
     this.imageRepository=imageRepository;
    }


    @Override
    public List<UserImage> getUserImage(String username) {
        return imageRepository.getByUsername(username);
    }

    @Override
    public UserImage saveImage(UserImage userImage) {
        return imageRepository.save(userImage);
    }
}
