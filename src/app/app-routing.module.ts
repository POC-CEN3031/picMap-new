import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-pg/landing-pg.component';
import { NewPostComponent } from './new-post/new-post.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
      path:'',
      component: AppComponent,
      children: [{
        path: '',
        component: LandingPageComponent,
      },
      {
        path: 'new-post',
        component: NewPostComponent,
      },
      {
        path: 'user-profile',
        component: UserProfileComponent,
      },
      {
        path: 'view-post',
        component: ViewPostComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
