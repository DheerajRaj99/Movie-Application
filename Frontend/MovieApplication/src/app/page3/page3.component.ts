import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Page3Service } from './page3.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  popularMovies: any;
  constructor(private page:Page3Service, private sb:MatSnackBar) {
    this.popularMovies=this.getPopularMovies();
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
      this.page.postMovies(this.data).subscribe((response) => {});
      let snackBarRef = this.sb.open(m.title, 'Added To Favourites', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000,
        panelClass: ['custom-style'],
      });
    }
  
  }
  
  getPopularMovies() {
    this.page.popularMovies().subscribe((response) => {
      this.popularMovies = response.results;
    });
  }

}
