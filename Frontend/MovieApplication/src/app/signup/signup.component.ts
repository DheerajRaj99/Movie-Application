import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css','./custom-theme.scss']
})
export class SignupComponent {
  
  constructor(private router:Router, private registerService:SignupService ) {}    

  ngOnInit(): void {
  }

  form=new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',[Validators.required]),
    username:new FormControl('',[Validators.required,Validators.minLength(7)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  

  });
 

  submit()
  {
    let data=this.form.value;
    console.log(data);
    this.registerService.register(data).subscribe((response:any)=>{
      Swal.fire({
        text: 'User Registered Successfully',
        icon: 'success',
      })
      this.router.navigateByUrl('login')
    });
  }

  get firstName()
{
  return this.form.get('firstName')
}
get lastName()
{
  return this.form.get('lastName')
}
get username()
{
  return this.form.get('username')
}
get email()
{
  return this.form.get('email')
}
get password()
{
  return this.form.get('password')
}


}
//,Validators.pattern(/*"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"*/"/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/")