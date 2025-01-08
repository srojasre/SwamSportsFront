import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'; // Asegúrate de que esta línea esté presente
import { HomeComponent } from './home/home.component';
import { MiniCatalogComponent } from './mini-catalog/mini-catalog.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoService } from './producto.service';
import { FormsModule } from '@angular/forms';
import { AdminTrollComponent } from './admin-troll/admin-troll.component';
import { PruebasComponent } from './pruebas/pruebas.component';

@NgModule({
  declarations: [				
    AppComponent,
    NavbarComponent, // Asegúrate de declarar aquí el componente
      HomeComponent,
      MiniCatalogComponent,
      AdminTrollComponent,
      PruebasComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }