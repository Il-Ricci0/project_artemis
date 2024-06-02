import { Component } from '@angular/core';
import { BleConnection } from '@meshtastic/js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'FRONTEND';

  private _conn: BleConnection = new BleConnection();

  async request(){
    
    let supported = await this._conn.supported();
    console.log(supported)

    await this._conn.getDevice({filters: [{namePrefix: 'Meshtastic'}]});
  }
}
