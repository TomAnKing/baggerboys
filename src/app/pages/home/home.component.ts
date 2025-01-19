import { Component, signal } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {
  links = signal<Links[]>([
    {label: "Treninger", route: "/treninger"},
    {label: "Botsatser", route: "/botsatser"},
    {label: "Medlemmer", route: "/medlemmer"},
  ])
  
  constructor( private router: Router ) { }

  goToRoute(route:string){
    // ...Your Logic...
    console.log(route);
    
    this.router.navigate([ route ])
 }

}
export interface Links {
  label:string;
  route: string;
}
