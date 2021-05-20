import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import * as PlotlyJS from 'plotly.js-dist';
import { PlotlyModule } from 'angular-plotly.js';
import {CommonModule} from "@angular/common";
import { PlotlyExampleComponent } from './plotly-example/plotly-example.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule} from "./app-routing/app-routing.module";
import { MapplotComponent } from './mapplot/mapplot.component';


PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    PlotlyExampleComponent,
    HomeComponent,
    MapplotComponent,
  ],
  imports: [
    BrowserModule,
    PlotlyModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
