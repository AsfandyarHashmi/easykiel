import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

@Component({
  selector: 'app-exampleguide',
  templateUrl: './exampleguide.component.html',
  styleUrls: ['./exampleguide.component.css']
})
export class ExampleguideComponent implements OnInit, AfterViewInit {
  private provider = new OpenStreetMapProvider();

  private map;

  ngAfterViewInit(): void {
    this.initMap();
  }

  constructor() { }

  ngOnInit() {
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 54.3174927,10.1301043 ],
      zoom: 17
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Made with EasyKiel'
    });

    tiles.addTo(this.map);
    
    this.provider.search({ query: 'Sophienblatt 12 Kiel' }).then(result => {
      this.map.panTo(new L.LatLng(result[0].y,result[0].x));
      var marker = L.marker([result[0].y,result[0].x]).addTo(this.map);
      // var popup = L.popup()
      // .setLatLng([result[0].y,result[0].x])
      // .setContent("Rathaus")
      // .openOn(this.map);
    });
  }
}
