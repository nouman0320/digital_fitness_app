import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PerformanceComponent } from './performance/performance.component';
import { DietComponent } from './diet/diet.component';
import { WorkoutComponent } from './workout/workout.component';

import { AlertModule } from 'ngx-bootstrap/alert';
import { UserService } from './user.service';
import { WebService } from './web.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProgressActivityComponent } from './progress-activity/progress-activity.component';
import { MeasurementsComponent } from './measurements/measurements.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    RegisterComponent,
    ProfileComponent,
    PerformanceComponent,
    DietComponent,
    WorkoutComponent,
    ProgressActivityComponent,
    MeasurementsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [UserService, WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
