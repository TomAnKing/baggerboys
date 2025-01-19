import { Component, signal } from '@angular/core';
import {  Router, RouterLink, RouterOutlet } from '@angular/router';

import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet,],
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
