import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//Paso 5
  import { StatusFilter } from './status-filter.pipe';
//Paso 5

@NgModule({
  declarations: [
    AppComponent,
    //StatusFilter //PASO 5
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
