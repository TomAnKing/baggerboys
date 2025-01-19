import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'baggerboys';
  hideLogo = signal<boolean>(false)

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      this.hideLogo.set(location.path() === "")
    });
  }



 
}
