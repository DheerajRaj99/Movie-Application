import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Page2Service } from './page2.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  topRatedMovies:any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private homeService:Page2Service, private sb:MatSnackBar) {
    this.topRatedMovies=this.getTopRatedMovies();
   }

  ngOnInit(): void {
  }
  imgUrl: string = 'https://image.tmdb.org/t/p/original';


search:any;
  data: any = {
    title: String,
    release_date: String,
    poster_path: String,
    username: String,
  };

  addfav(m: any) {
      this.data = {
      title: m.title,
      release_date: m.release_date,
      poster_path: m.poster_path,
      username: sessionStorage.getItem('username'),
    };
    if(sessionStorage.getItem('username')==null && sessionStorage.getItem('password')==null)
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
    this.homeService.postMovies(this.data).subscribe((response) => {});
    let snackBarRef = this.sb.open(m.title, 'Added To Favourites', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
      panelClass: ['custom-style'],
    });
  }

}
getTopRatedMovies() {
  this.homeService.allTopRatedMovies().subscribe((response) => {
    this.topRatedMovies = response.results;
  });
}
}
