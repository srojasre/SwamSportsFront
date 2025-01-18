import { Routes } from '@angular/router';
import { AdminTrollComponent } from './admin-troll/admin-troll.component';
import { HomeColombiaEditionComponent } from './home-colombia-edition/home-colombia-edition.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';

export const routes: Routes = [


    {path: 'admin', component: AdminTrollComponent },
    {path: 'colombia', component: HomeColombiaEditionComponent},
    { path: '', component: HomeComponent }, // Página principal
    { path: 'producto/:id', component: ProductoDetailComponent }
    
];
