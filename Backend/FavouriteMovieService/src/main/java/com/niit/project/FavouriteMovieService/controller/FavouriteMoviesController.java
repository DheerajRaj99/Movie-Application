package com.niit.project.FavouriteMovieService.controller;

import com.niit.project.FavouriteMovieService.model.FavouriteMovies;
import com.niit.project.FavouriteMovieService.service.FavouriteMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/favourites")
public class FavouriteMoviesController {


    private FavouriteMovieService favouriteMovieService;

    @Autowired
    public FavouriteMoviesController(FavouriteMovieService favouriteMovieService)
    {
        this.favouriteMovieService=favouriteMovieService;
    }

    @PostMapping("/favourite-movies")
    public ResponseEntity<?> addFavouriteMovie(@RequestBody FavouriteMovies favouriteMovies){
        // get current usr object by using email id, cuser
        // cuser.getFav().add(favouriteMovies)
        return  new ResponseEntity<>(favouriteMovieService.addFavouriteMovie(favouriteMovies), HttpStatus.OK);
    }
    @GetMapping("/favourite-movies/{username}")
    public ResponseEntity<?> getAllFavouriteMovies(@PathVariable String username)
    {
        return  new ResponseEntity<>(favouriteMovieService.getAllFavouriteMovies(username),HttpStatus.OK);
    }
    @DeleteMapping("/favourite-movie/{title}")
    public ResponseEntity<?> deleteByMovieName(@PathVariable String title)
    {
        return new ResponseEntity<>(favouriteMovieService.deleteByMovieName(title),HttpStatus.OK);
    }

}
