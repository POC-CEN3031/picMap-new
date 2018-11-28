import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-pg/landing-pg.component';
import { NewPostComponent } from './new-post/new-post.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NewPostComponent,
    UserProfileComponent,
    ViewPostComponent,
    LoginComponent,
    RegisterComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'google key'
    }),
    RouterModule.forRoot(
      [{ 
        path: '', 
        component: LandingPageComponent
      },
      { 
        path: 'new-post', 
        component: NewPostComponent
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
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
