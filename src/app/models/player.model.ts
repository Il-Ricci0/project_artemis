import { ISerializable } from "../interfaces/i-serializable.interface";
import { GeoData } from "./geo-data.model";
import * as L from 'leaflet';
import { User } from "./user.model";

export class Player extends User implements ISerializable {
  public callsign: string = '';
  public geoData: GeoData = new GeoData();
  public color: string = 'green';

  private marker: any;
  private area: any;
  
  public tooltip: L.Tooltip = new L.Tooltip();

  public override deserialize(input?: any): Player {
    super.deserialize(input)
    this.callsign = input?.callsign;
    this.geoData = new GeoData().deserialize(input?.geoData);
    this.color = input?.color ?? this.color;

    this.tooltip = new L.Tooltip({
      content: this.callsign,
      permanent: true,
      direction: 'top',  
      className: 'player-tooltip',
    });

    return this;
  }

  public addToMap(map: any) {
    this.marker = L.circle([this.geoData.latitude, this.geoData.longitude], {
      color: this.color,
      radius: 3,
      opacity: 1,
      fillOpacity: 1,
    }).bindTooltip(this.tooltip).addTo(map);

    this.area = L.circle([this.geoData.latitude, this.geoData.longitude], {
      radius: this.geoData.accuracy,
      color: this.color,
    }).addTo(map);
  }
}