import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { DetailsCharactersComponent } from './details-characters/details-characters.component';
import { DashboardCharactersComponent } from './dashboard-characters/dashboard-characters.component';
import { SharedModule } from '@shared';
import { MaterialModule } from '@material';


@NgModule({
  declarations: [
    DetailsCharactersComponent,
    DashboardCharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class CharactersModule { }
