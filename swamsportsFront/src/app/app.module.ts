import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'; // Asegúrate de que esta línea esté presente
import { HomeComponent } from './home/home.component';
import { MiniCatalogComponent } from './mini-catalog/mini-catalog.component';

@NgModule({
  declarations: [		
    AppComponent,
    NavbarComponent, // Asegúrate de declarar aquí el componente
      HomeComponent,
      MiniCatalogComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }