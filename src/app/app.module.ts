import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/navbar/nav-bar/nav-bar.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { NgxModule } from './modulos/ngx/ngx.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
