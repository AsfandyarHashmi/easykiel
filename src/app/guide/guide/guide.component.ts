import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { GuideService } from 'src/app/services/guide.service';
import { ActivatedRoute } from '@angular/router';
import { Guide } from 'src/app/models/Guide';
import { Step } from 'src/app/models/Step';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
  guide: Guide;
  steps: Step[] = [];

  private provider = new OpenStreetMapProvider();
  private map;

  ngAfterViewInit(): void {
    
  }

  constructor(private guideService: GuideService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.guide = new Guide();
    this.guideService.getBySlug(this.route.snapshot.paramMap.get('slug')).subscribe(res => {
      this.guide = res;
      this.steps = JSON.parse(res.steps);
      this.initMap();
    });
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
    
    this.panTo(this.guide.coords);
  }

  panTo(coords: string) {
    this.provider.search({ query: coords }).then(result => {
      this.map.panTo(new L.LatLng(result[0].y,result[0].x));
      var marker = L.marker([result[0].y,result[0].x]).addTo(this.map);
      // var popup = L.popup()
      // .setLatLng([result[0].y,result[0].x])
      // .setContent("Rathaus")
      // .openOn(this.map);
    });
  }
}
