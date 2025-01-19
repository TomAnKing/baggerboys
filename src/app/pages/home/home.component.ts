import { Component, signal } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  links = signal<Links[]>([
    {label: "Treninger", route: "/treninger"},
    {label: "Botsatser", route: "/botsatser"},
    {label: "Medlemmer", route: "/medlemmer"},
  ])
  
}
export interface Links {
  label:string;
  route: string;
}
