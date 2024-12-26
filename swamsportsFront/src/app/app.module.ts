import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'; // Asegúrate de que esta línea esté presente

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent // Asegúrate de declarar aquí el componente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }