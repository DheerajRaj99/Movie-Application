import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  margin: any;

  constructor(private breakpointObserver: BreakpointObserver,private router:Router) {
    this.userlogin();
  }
visible:boolean=false;
isVisible:boolean=true;
msg:string='';
user=sessionStorage.getItem('username')
signup()
{

  this.router.navigateByUrl('signup')
}
login()
{
  this.router.navigateByUrl('login')
}
home()
{
  this.router.navigateByUrl('home');
}
profile()
{
  if(sessionStorage.getItem('username')==null)
    {
      alert('Please Login To Continue!!')
      this.router.navigateByUrl('/login')
    }
    else{
  this.router.navigateByUrl('profile')
    }
}

userAccess()
{
  if(sessionStorage.getItem('username')==null && sessionStorage.getItem('password')==null)
    {
      Swal.fire({
        text: 'Please Login To Continue',
        icon: 'warning',
        confirmButtonText: 'Take Me To Login Page',
      }).then(function(){
        location.replace("http://localhost:4200/login")
        
      })
    }

}
recMovies()
{
  if(sessionStorage.getItem('username')==null && sessionStorage.getItem('password')==null)
  {
    Swal.fire({
      text: 'Please Login To Continue',
      icon: 'warning',
      confirmButtonText: 'Take Me To Login Page',
    }).then(function(){
      location.replace("http://localhost:4200/login")
      
    })
  }
  else{
    this.router.navigateByUrl('recommended');
  }
}
favMovies()
{
  if(sessionStorage.getItem('username')==null && sessionStorage.getItem('password')==null)
  {
    alert('Please Login To Continue!!')
    this.router.navigateByUrl('/login')
  }
  else{
    this.router.navigateByUrl('favourite');
  }
}
logout()
{
  sessionStorage.clear();
  Swal.fire({
    text: 'User Logged Out Successfully',
    icon: 'success',
  })
  window.location.reload();
 }
userlogin()
{
  if(sessionStorage.getItem("username")!=null && sessionStorage.getItem("password")!=null)
  {
    this.isVisible=!this.isVisible;
    this.margin="190px";
    this.visible=!this.visible;
  }
}

}
