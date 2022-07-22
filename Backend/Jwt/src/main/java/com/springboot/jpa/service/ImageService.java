package com.springboot.jpa.service;

import com.springboot.jpa.model.UserImage;

import java.util.List;

public interface ImageService {

    public abstract List<UserImage> getUserImage(String username);
    public abstract UserImage saveImage(UserImage userImage);
}
