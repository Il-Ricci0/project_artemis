import { Injectable } from '@angular/core';
import { BleConnection } from '@meshtastic/js';

@Injectable({
  providedIn: 'root'
})
export class MeshtasticService {

  private _conn: BleConnection = new BleConnection();
  private _device: any | null = null;

  async request(){
    
    let supported = await this._conn.supported();
    console.log(supported)

    this._device = await this._conn.getDevice({filters: [{namePrefix: 'Mesh'}]});
    console.log(this._device)
  }

  async read(){

  }

  constructor() { }
}
