import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChartComponent } from './charts/charts.component';
import { MoviesService } from './charts/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [ MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
