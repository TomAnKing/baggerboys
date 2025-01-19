import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TreningerComponent } from './pages/treninger/treninger.component';
import { BotsatserComponent } from './pages/botsatser/botsatser.component';
import { MedlemmerComponent } from './pages/medlemmer/medlemmer.component';



export const routes: Routes = [
    {path: "", component: LoginComponent, pathMatch: "full"}, 
    {path: "home", component: HomeComponent, }, 
    {path: "treninger", component: TreningerComponent, }, 
    {path: "botsatser", component: BotsatserComponent, }, 
    {path: "medlemmer", component: MedlemmerComponent, }, 
];
