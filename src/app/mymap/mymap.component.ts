import {Component, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-mymap',
  templateUrl: './mymap.component.html',
  styleUrls: ['./mymap.component.css']
})
export class MymapComponent implements OnInit {
public map: mapboxgl.Map;
  constructor() {
  }

  ngOnInit(): void {

    style = 'mapbox://styles/bobwis/ckp10adxt2caf17pko2e68cqi';
    lat = 153.0569951;
    lng = -27.20929129999999;
    message = 'Hello World!';

    this.map.on('load', (event) => {
      this.map.addSource('customMarker', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });
    });

    const markers = this.mapboxService.getMarkers();
    const data = {
      type: 'FeatureCollection',
      features: markers
    };

    this.map.addLayer({
      id: 'customMarketid',
      source: 'customMarker',
      type: 'symbol',
      layout: {
        'text-field': '{message}',
        'text-size': 24,
        'text-transform': 'uppercase',
        'icon-image': 'marker-15',
        'text-offset': [0, 1.5]
      },
      paint: {
        'text-color': '#f16624',
        'text-halo-color': '#fff',
        'text-halo-width': 2
      }
    });
  }
}
