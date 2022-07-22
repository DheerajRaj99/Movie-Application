import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { FavouriteMoviesService } from './favourite-movies.service';

@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.css']
})
export class FavouriteMoviesComponent implements OnInit {
  movies: any;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  msg: string;
  head: string;
  constructor(private favService:FavouriteMoviesService,private sb:MatSnackBar) {
    this.movies=this.getAllMovies();
  }

  ngOnInit(): void {
  }

imgUrl:string="https://image.tmdb.org/t/p/original";

search:any;

  getAllMovies()
{
  if(sessionStorage.getItem('username')==null && sessionStorage.getItem('password')==null)
  {
//this.msg="Please Login to Add/View Favourite Movies";
Swal.fire({
  title: 'Please Login to Add/View Favourite Movies',
  icon: 'warning',
  confirmButtonText: 'Take me to login page',
}).then(function(){ 
  location.replace("http://localhost:4200/login")
  })
  }
  else{
  this.favService.getMovies().subscribe(response=>{
    this.movies=response;
    this.head="Your Favourite Movies";
   // sessionStorage.setItem('movie',m.title)
  });
}
}

deleteFav(m:any)
{
this.favService.deleteMovie(m.title).subscribe(response=>{
  window.location.reload();
});
let snackBarRef= this.sb.open(m.title,'Removed from favourites', {
  horizontalPosition: this.horizontalPosition,
  verticalPosition: this.verticalPosition,
  duration:3000,
  panelClass: ["custom-style"]
});
}



}


