import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import * as L from 'leaflet';
import { Player } from '../../../models/player.model';
import { AppService } from '../../../../services/app.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  public map: any;

  public constructor(
    private appService: AppService,
    private renderer: Renderer2) {
  }

  public options: any = {
    attributionControl: false,
    layers: [
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          maxZoom: 18,
        }
      )
    ]
  }

  public onMapReady(map: any) {
    this.map = map;

    let p: any =
    {
      callsign: 'piccolo',
      geoData: {
        latitude: 0,
        longitude: 0,
        accuracy: 100000,
        timestamp: new Date()
      }
    };
    let player: Player = new Player().deserialize(p);
    player.addToMap(this.map);

    this.appService.players.push(player);

    // Update the font size of the element on 'zoomend' event
    // map.on("zoomend", () => {
    //   let zoomLevel = map.getZoom();
    //   console.log(zoomLevel)
    //   let newSize = zoomLevel - zoomLevel / 5; // Adjust the size based on the zoom level
    //   for (let p of this.appService.players) {
    //     document.querySelectorAll('.player-tooltip').forEach((element) => {
    //       if (zoomLevel <= 15)
    //         this.renderer.setStyle(element, 'display', 'none');
    //       else
    //         this.renderer.setStyle(element, 'display', 'flex');
    //     })
    //   }
    // });
  }

  ngAfterViewInit(): void {
    this.map.setView([0, 0], 5);
  }
}
