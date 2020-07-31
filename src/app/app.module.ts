import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as Components from './core/components/';
import * as Containers from './core/containers/';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    Components.CardComponent,
    Containers.HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }