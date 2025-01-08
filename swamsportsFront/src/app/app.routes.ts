import { Routes } from '@angular/router';
import { AdminTrollComponent } from './admin-troll/admin-troll.component';
import { HomeColombiaEditionComponent } from './home-colombia-edition/home-colombia-edition.component';
import { AppComponent } from './app.component';

export const routes: Routes = [


    {path: 'admin', component: AdminTrollComponent },
    {path: 'colombia', component: HomeColombiaEditionComponent},
    {path: '', component: AppComponent}
];
