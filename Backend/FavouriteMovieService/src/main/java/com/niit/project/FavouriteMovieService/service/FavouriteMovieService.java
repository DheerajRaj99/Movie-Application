package com.niit.project.FavouriteMovieService.service;

import com.niit.project.FavouriteMovieService.model.FavouriteMovies;

import java.util.List;

public interface FavouriteMovieService {

    public FavouriteMovies addFavouriteMovie(FavouriteMovies favouriteMovies);
    public abstract List<FavouriteMovies> getAllFavouriteMovies(String username);
    public abstract FavouriteMovies deleteByMovieName(String title);


}
