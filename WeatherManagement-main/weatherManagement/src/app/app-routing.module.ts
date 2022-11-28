import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { RegisterComponent } from './register/register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherListComponent } from './weather-list/weather-list.component';

const routes: Routes = [
  {path:'login',component:UserLoginComponent},
  {path:'register',component:RegisterComponent},
  { path: 'home', component: HomeComponent },
  {path:'weather-list',component:WeatherListComponent},
  {path:'weather-details',component:WeatherDetailsComponent},
  {path: '', redirectTo:'weatherr', pathMatch:'full'},
  {path: 'weatherr', component:WeatherListComponent},
  {path:'weatherr/:city', component: WeatherDetailsComponent},
  {path:'dashboard', component:DashboardComponent, pathMatch:'full'},
  {path:'feedback', component:FeedbackComponent},
  {path:'map', component:MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
