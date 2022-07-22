import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { RecommendedMoviesService } from './recommended-movies.service';

@Component({
  selector: 'app-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.css']
})
export class RecommendedMoviesComponent implements OnInit {
  recommendedMovies: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  recommendedMovies2: any;

  constructor(private recommendedService:RecommendedMoviesService,private sb:MatSnackBar) { 
    this.recommendedMovies=this.getRecommendedMovies();
    this.recommendedMovies2=this.getRecommendedMovies2();
  }

  ngOnInit(): void {
  }
  imgUrl:string="https://image.tmdb.org/t/p/original";

  search:string='';
like:number=0;
getRecommendedMovies()
{
  this.recommendedService.recommendedMovies().subscribe(response=>{
    this.recommendedMovies=response.results;
  });
}
getRecommendedMovies2()
{
  this.recommendedService.recommendedMoviesPage2().subscribe(response=>{
    this.recommendedMovies2=response.results;
  });

}
data:any={
  "title":String,
  "release_date":String,
  "poster_path":String,
  "username":String
};
addfav(m:any)
{
  this.data={
    "title":m.title,
    "release_date":m.release_date,
    "poster_path":m.poster_path,
    "username":sessionStorage.getItem("username")
  }
  if(sessionStorage.getItem('username')==null)
  {
    Swal.fire({
    text: 'Please Login To Continue!',
    icon: 'warning',
    confirmButtonText: 'Take Me To Login Page',
  }).then(function(){ 
    location.replace("http://localhost:4200/login");
    })
    }
    else{
    this.recommendedService.postMovies(this.data).subscribe(response=>{
    })
 let snackBarRef= this.sb.open(m.title,'Added To Favourites', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration:3000,
    panelClass: ["custom-style"],
  });
}
    /*
        let snackBarRef = this.sb.open(m.title, 'Already Added To Favourites', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000,
          panelClass: ['custom-style'],
        });*/
    
      }
}
