import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsResult } from '@interfaces';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/app.state';
import { searchGlobalTerm } from 'src/app/core/state/slectors/search.selector';
import { loadLocations } from '../state/actions/locations.actions';
import { selectListLocations, selectLocationsLoading } from '../state/selectors/locations.selector';

@Component({
  selector: 'app-dashboard-locations',
  templateUrl: './dashboard-locations.component.html',
  styleUrls: ['./dashboard-locations.component.scss'],
})
export class DashboardLocationsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'dimension', 'name', 'type', 'created'];

  public dataSource: MatTableDataSource<LocationsResult> =
    new MatTableDataSource();
  public customerTotal: number = 0;
  public noData: LocationsResult[] = [<LocationsResult>{}];
  loading$: Observable<boolean> = new Observable();
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private route: Router
  ) {}

  private initializeData(locations: any): void {
    console.log(locations);

    this.dataSource = new MatTableDataSource(
      locations.length ? locations : this.noData
    );
  }

  public ngAfterViewInit(): void {}

  toSearch(item: LocationsResult) {
    let ids: any[] = [];
    item.residents?.forEach((url) => {
      const lastUrlSegment = url.split('?')[0].split('/').pop();
      ids.push(lastUrlSegment);
    });

    this.route.navigate(['/characters/search', ids.join(',')]);
  }

  ngOnInit(): void {
    this.store.pipe(select(selectListLocations)).subscribe((locations) => {
      this.loading$ = this.store.select(selectLocationsLoading);

      this.initializeData(locations.locations);
    });

    this.store.pipe(select(searchGlobalTerm)).subscribe((term) => {
      this.store.dispatch(
        loadLocations({
          params: {
            page: 0,
            name: term,
          },
        })
      );
    });
  }
}
