import { Component } from '@angular/core';
import { MeshtasticService } from '../../../../services/meshtastic.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public collapsed: boolean = true;

  public constructor(protected meshtasticService: MeshtasticService) {

  }
}
