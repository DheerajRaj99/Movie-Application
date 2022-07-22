import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInfo: any;
  displayImg: "/assets/l10.png";

  constructor(private router:Router,private profileService:ProfileService) { 
    this.userInfo=this.getUserDetails();
  }

  ngOnInit(): void {
  }

  getUserDetails()
  {
    this.profileService.userDetails().subscribe(response=>{
      this.userInfo=response;console.log(this.userInfo)
    })
  }
  url: any;
onFileSelected(_event: any)
{
  
  var reader = new FileReader();
		reader.readAsDataURL(_event.target.files[0]);
		
		reader.onload = (_event) => {
			this.url = reader.result;
      console.log(this.url)
    }
  }

    




}
