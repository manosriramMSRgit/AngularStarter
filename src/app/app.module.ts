import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoyalEnfieldComponent } from './royal-enfield/royal-enfield.component';
import { HomeComponent } from './home/home.component';
import { YezdiComponent } from './yezdi/yezdi.component';
import { HondaComponent } from './honda/honda.component';

@NgModule({
  declarations: [
    AppComponent,
    RoyalEnfieldComponent,
    HomeComponent,
    YezdiComponent,
    HondaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
