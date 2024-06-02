import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [
    DashboardComponent,
    MapComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    LeafletModule
  ]
})
export class DashboardModule { }
