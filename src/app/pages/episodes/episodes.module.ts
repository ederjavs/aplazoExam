import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { DashboardEpisodesComponent } from './dashboard-episodes/dashboard-episodes.component';
import { MaterialModule } from '@material';


@NgModule({
  declarations: [
    DashboardEpisodesComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    MaterialModule
  ]
})
export class EpisodesModule { }
