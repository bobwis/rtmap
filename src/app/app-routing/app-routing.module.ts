import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from  '../home/home.component';
import {PlotlyExampleComponent} from "../plotly-example/plotly-example.component";
import { MapplotComponent } from  '../mapplot/mapplot.component';
import {Mapplot2Component} from "../mapplot2/mapplot2.component";
import {MymapComponent} from "../mymap/mymap.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'plot', component: PlotlyExampleComponent },
  { path: 'map', component: MapplotComponent },
  { path: 'map2', component: Mapplot2Component },
  { path: 'mapbox', component: MymapComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'plot',
    redirectTo: 'plotly-example',
    pathMatch: 'full'
  },
  {
  path: 'map',
  redirectTo: 'mapplot',
  pathMatch: 'full'
  },
  {
  path: 'map2',
  redirectTo: 'mapplot2',
  pathMatch: 'full'
},
  {
    path: 'mapbox',
    redirectTo: 'ymap',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
