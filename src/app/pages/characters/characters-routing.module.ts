import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@layout';
import { DashboardCharactersComponent } from './dashboard-characters/dashboard-characters.component';
import { DetailsCharactersComponent } from './details-characters/details-characters.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardCharactersComponent },
      { path: 'search/:characters', component: DashboardCharactersComponent },
      { path: 'detail/:itemId', component: DetailsCharactersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
