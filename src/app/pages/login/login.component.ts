import { Component, signal } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { LoginFormComponent } from './login-form/login-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showLogin = signal<boolean>(false);

  constructor( private router: Router ) { }


  goToHome(){
    // ...Your Logic...
    this.router.navigate([ '/home' ])
 }
}

