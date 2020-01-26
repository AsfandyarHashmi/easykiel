import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/services/guide.service';
import * as L from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private provider = new OpenStreetMapProvider();
  private map;
  
  guides;
  search_word = "";

  constructor(private guideService: GuideService) { 
    
  }

  ngOnInit() {
    this.guideService.getLatest().subscribe(res => {
      this.guides = res;

      this.initMap();
    });
  }

  search() {
    this.provider.search({ query: this.search_word }).then(result => {
      this.map.panTo(new L.LatLng(result[0].y,result[0].x));
      //var marker = L.marker([result[0].y,result[0].x]).addTo(this.map);
      L.circle([result[0].y,result[0].x], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 500
      }).addTo(this.map);
    });
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 54.3174927,10.1301043 ],
      zoom: 15
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Made with EasyKiel'
    }).addTo(this.map);

    this.guides.forEach(guide => {
      this.provider.search({ query: guide.coords }).then(result => {
        this.map.panTo(new L.LatLng(result[0].y,result[0].x));
        var marker = L.marker([result[0].y,result[0].x]).addTo(this.map);
      });
    });
  }
}
