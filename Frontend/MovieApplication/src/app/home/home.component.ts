import { style } from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { reduce } from 'rxjs';
import Swal from 'sweetalert2';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: any;
  topRatedMovies: any;
  popularMovies: any;
  recent: any;
  durationInSeconds: 1;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  i: any;
  constructor(private homeService: HomeService, private sb: MatSnackBar , private router:Router) {
    this.movies = this.getAllMovies();
  }

  ngOnInit(): void {}

  
  search: string = '';

  imgUrl: string = 'https://image.tmdb.org/t/p/original';

  color="white";
  toggle = true;


  getAllMovies() {
    this.homeService.allMovies().subscribe((response) => {
      this.movies = response.results;
    });
  }
  
  clicked:boolean=false;
  
  data: any = {
    title: String,
    release_date: String,
    poster_path: String,
    username: String,
  };
  addfav(m: any,i:number) {
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
 /*const collection=document.getElementById("fav").style.color="red";
 /* this.toggle = !this.toggle;*/
    this.homeService.postMovies(this.data).subscribe((response) => {});
    let snackBarRef = this.sb.open(m.title, 'Added To Favourites', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
      panelClass: ['custom-style'],
    });
  }

/*  let snackBarRef = this.sb.open(m.title, 'Already Added To Favourites', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: 3000,
    panelClass: ['custom-style'],
  });
  this.like=0;*/
}

  }

  

