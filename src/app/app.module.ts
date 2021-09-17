import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgForm } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    NgForm
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
