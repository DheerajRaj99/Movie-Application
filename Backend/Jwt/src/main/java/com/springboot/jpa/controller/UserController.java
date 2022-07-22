package com.springboot.jpa.controller;

import com.springboot.jpa.exceptions.UserNotFoundException;
import com.springboot.jpa.model.User;
import com.springboot.jpa.service.SecurityTokenGenerator;
import com.springboot.jpa.service.SecurityTokenGeneratorImpl;
import com.springboot.jpa.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;
import java.util.Objects;

@CrossOrigin("*")
@RestController
@RequestMapping("/user/auth")
public class UserController {

    private UserService userService;
    private SecurityTokenGenerator securityTokenGenerator;

    @Autowired
    public UserController(UserService userService, SecurityTokenGenerator securityTokenGenerator)
    {
        this.userService=userService;
        this.securityTokenGenerator=securityTokenGenerator;
    }
    //http://localhost:7777/user/auth/register

    @PostMapping(value = "/register")
    public ResponseEntity<?> registerUser(@RequestBody User user)
    {
        User result = userService.saveUser(user);

      /* if(result!=null)
        {
            if(user.getProfilePic()!=null)
            {
                System.out.println("image name"+user.getProfilePic().getOriginalFilename());
                System.out.println("location"+System.getProperty("user.dir"));
                String localpath=System.getProperty("user.dir");
            try{
                Path path= Paths.get(localpath+"\\images\\");
            Files.copy(user.getProfilePic().getInputStream(),path.resolve(user.getEmail()+".jpg"));
            } catch (IOException e) {
                e.printStackTrace();
            }
            }
        }*/

        // to store image in current project folder with naem as emailid.jpg
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/getallusers")
    public ResponseEntity<?> getAllUsers(){
        return new ResponseEntity<>(userService.getAllUsers(),HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginCheck(@RequestBody User user) throws UserNotFoundException, IOException {
        Map<String, String> map = null;
        try {
            User res = userService.authenticateUser(user.getUsername(), user.getPassword());
            if (Objects.equals(res.getUsername(), user.getUsername())) {
                map = securityTokenGenerator.generateToken(res);
            }
            return new ResponseEntity<>(map, HttpStatus.OK);

        } catch (UserNotFoundException ex) {
            throw new UserNotFoundException();
        } catch (Exception ex) {
            return new ResponseEntity<>("Other Exception", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

      /*  @GetMapping(value="/image/{email}",produces = MediaType.IMAGE_JPEG_VALUE)
        public ResponseEntity<byte[]> getUserImage(@PathVariable String email) throws IOException {
            String localpath=System.getProperty("user.dir");
            HttpHeaders headers=new HttpHeaders();
            Path path=Paths.get(localpath+"\\images\\"+email);
            byte[] media =Files.readAllBytes(path);
            ResponseEntity<byte[]> responseEntity=new ResponseEntity<>(media,HttpStatus.OK);
return  responseEntity;
        }*/
        @GetMapping("/userinfo/{username}")
    public ResponseEntity<?> getUserDetails(@PathVariable String username)
        {
            return new ResponseEntity<>(userService.getUserDetails(username),HttpStatus.OK);
        }


    }



