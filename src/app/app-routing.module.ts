import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/nav/about/about.component';
import { ContactoComponent } from './componentes/nav/contacto/contacto.component';

import { HomeComponent } from './componentes/nav/home/home.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'about', component: AboutComponent},
  {path: 'noticias/:id', component: NoticiasComponent},
  {path: 'aboutus', redirectTo: 'contacto'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
