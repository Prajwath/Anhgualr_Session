import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FirstComponentComponent } from './first-component/first-component.component';


//anotations @NgModule
@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
//calling API from the backend to frontend
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
