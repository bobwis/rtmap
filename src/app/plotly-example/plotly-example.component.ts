import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plotly-example',
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
})
export class PlotlyExampleComponent implements OnInit {
  public graph = {
    data: [
      { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'blue'} },
      { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: {width: 320, height: 240, title: 'A Fancy Plot'}
  };
  constructor() { }

  ngOnInit(): void {
  }

}
