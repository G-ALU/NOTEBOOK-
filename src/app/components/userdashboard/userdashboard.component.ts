import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginpageComponent } from '../loginpage/loginpage.component';

@Component({
  selector: 'app-userdashboard',
  standalone: true,
  imports: [RouterLink, LoginpageComponent],
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {

}
