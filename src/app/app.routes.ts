import { Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterComponent } from './components/register/register.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';


export const routes: Routes = [

    {path:'', component:LandingpageComponent},
    {path:'landing', pathMatch:'full', redirectTo:''},
    {path:'login', component:LoginpageComponent},
    {path:'register', component:RegisterComponent},
    {path:'userdashboard', component:UserdashboardComponent}
];  
