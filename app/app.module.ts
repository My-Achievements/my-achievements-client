import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './components/app.component';

import { HomeComponent }   from './components/home/home.component';
import { LoginComponent }   from './components/login/login.component';
import { LogoutComponent }   from './components/logout/logout.component';
import { NavbarComponent }   from './components/navbar/navbar.component';
import { SearchbarComponent }   from './components/searchbar/searchbar.component';
import { ProfileLinkComponent }   from './components/profileLink/profileLink.component';
import { ProfileDetailsComponent }   from './components/profileDetails/profileDetails.component';
import { ProfileTabsComponent }   from './components/profileTabs/profileTabs.component';
import { TabDetailsComponent }   from './components/tabDetails/tabDetails.component';
import { AchievementPreviewComponent }   from './components/achievementPreview/achievementPreview.component';
import { AchievementDetailsComponent }   from './components/achievementDetails/achievementDetails.component';
import { RegisterComponent } from './components/register/register.component';
import { EditTabsComponent } from './components/editTabs/editTabs.component';
import { EditAchievementsComponent } from './components/editAchievements/editAchievements.component';

import { TabFormComponent } from './components/tabForm/tabForm.component';
import { AchievementFormComponent } from './components/achievementForm/achievementForm.component';
import { ProfileFormComponent } from './components/profileForm/profileForm.component';

import { Routing } from './app.routing';

import { LoginService } from './services/loginService/loginService';
import { ProfileService } from './services/profileService/profileService';
import { SearchService } from './services/searchService/searchService';
import { ProfileDetailsService } from './services/profileDetailsService/profileDetailsService';


@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  JsonpModule,
                  Routing,
                  FormsModule ],
  declarations: [ AppComponent,
                  HomeComponent,
                  LoginComponent,
                  NavbarComponent,
                  SearchbarComponent,
                  ProfileLinkComponent,
                  ProfileDetailsComponent,
                  ProfileTabsComponent,
                  TabDetailsComponent,
                  AchievementPreviewComponent,
                  AchievementPreviewComponent,
                  AchievementDetailsComponent,
                  RegisterComponent,
                  LogoutComponent,
                  EditTabsComponent,
                  EditAchievementsComponent,
                  ProfileFormComponent,
                  TabFormComponent,
                  AchievementFormComponent ],
  bootstrap: [ AppComponent ],
  providers: [ ProfileService,
               ProfileDetailsService,
               SearchService,
               LoginService ]
})

export class AppModule { }
