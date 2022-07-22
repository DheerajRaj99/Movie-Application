import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  token: any;
  name: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private sb:MatSnackBar ,private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }

  isLoggedIn: boolean = false;

  submit() {
    sessionStorage.setItem('username', this.form.value.username);
    sessionStorage.setItem('password',this.form.value.password);
    this.name = sessionStorage.getItem('username');
    console.log(this.name);
    let data = this.form.value;
    this.loginService.login(data).subscribe((response: any) => {
      this.token = response.token;
      sessionStorage.setItem('token', response.token);
      window.location.reload();
      window.location.replace("http://localhost:4200/home")
      let snackBarRef = this.sb.open('Welcome',this.name, {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000,
        panelClass: ['custom-style'],
    });
  
},error=>{
 // alert('Invalid Credentials\nLogin Unsuccessful')
  //window.location.reload();
  Swal.fire({
    title: 'Invalid Credentials',
    text: 'Login Unsuccessful',
    icon: 'error',
    confirmButtonText: 'Try Again',
  }).then(function(){ 
    location.reload();
    })
 
  
});
  }
}
