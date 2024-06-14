import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterComponent } from './components/register/register.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingpageComponent, LoginpageComponent, RegisterComponent, UserdashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NOTEBOOK';
}
