import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { DetailsLocationsComponent } from './details-locations/details-locations.component';
import { DashboardLocationsComponent } from './dashboard-locations/dashboard-locations.component';
import { MaterialModule } from '@material';


@NgModule({
  declarations: [
    DetailsLocationsComponent,
    DashboardLocationsComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    MaterialModule
  ]
})
export class LocationsModule { }
