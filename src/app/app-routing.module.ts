import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { DietComponent } from './diet/diet.component';
import { WorkoutComponent } from './workout/workout.component';
import { PerformanceComponent } from './performance/performance.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'dashboard', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard/diet', component: DietComponent},
  {path: 'dashboard/workout', component: WorkoutComponent},
  {path: 'dashboard/performance', component: PerformanceComponent},
  {path: 'dashboard/profile', component: ProfileComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
