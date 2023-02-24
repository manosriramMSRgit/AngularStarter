import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HondaComponent } from './honda/honda.component';
import { RoyalEnfieldComponent } from './royal-enfield/royal-enfield.component';
import { YezdiComponent } from './yezdi/yezdi.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'RoyalEnfield', component: RoyalEnfieldComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Yezdi', component: YezdiComponent},
  { path: 'Honda', component: HondaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
