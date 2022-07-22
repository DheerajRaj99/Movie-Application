package com.springboot.jpa.controller;

import com.springboot.jpa.model.UserImage;
import com.springboot.jpa.service.ImageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class ImageController {

    private ImageService imageService;

    public ImageController(ImageService imageService)
    {
        this.imageService=imageService;
    }
    @PostMapping(value = "/user-image")
    public ResponseEntity<?> saveImage(@RequestBody UserImage userImage)
    {
        return new ResponseEntity<>(imageService.saveImage(userImage), HttpStatus.OK);
    }

    @GetMapping("/user-image/{username}")
    public ResponseEntity<?> getUserImage(String username)
    {
        return new ResponseEntity<>(imageService.getUserImage(username),HttpStatus.OK);
    }
}
