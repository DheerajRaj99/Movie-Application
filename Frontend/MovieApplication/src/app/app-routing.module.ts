import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';
import { RecommendedMoviesComponent } from './recommended-movies/recommended-movies.component';
import { ProfileComponent } from './profile/profile.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'favourite-movies',component:FavouriteMoviesComponent},
  {path:'recommended-movies',component:RecommendedMoviesComponent},
  {path:'page2',component:Page2Component},
  {path:'page3',component:Page3Component},
  {path:'page4',component:Page4Component},
  {path:'page5',component:Page5Component}

]

@NgModule({
  
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
