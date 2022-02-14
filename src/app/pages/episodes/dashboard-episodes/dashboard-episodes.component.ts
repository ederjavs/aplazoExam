import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { EpisodesResultI } from '@interfaces';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/app.state';
import { searchGlobalTerm } from 'src/app/core/state/slectors/search.selector';
import { loadEpisodes } from '../state/actions/episodes.actions';
import {
  selectEpisodesLoading,
  selectListEpisodes,
} from '../state/selectors/episodes.selector';

@Component({
  selector: 'app-dashboard-episodes',
  templateUrl: './dashboard-episodes.component.html',
  styleUrls: ['./dashboard-episodes.component.scss'],
})
export class DashboardEpisodesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'episode', 'name', 'air_date', 'created'];

  public dataSource: MatTableDataSource<EpisodesResultI> =
    new MatTableDataSource();
  public customerTotal: number = 0;
  public noData: EpisodesResultI[] = [<EpisodesResultI>{}];
  loading$: Observable<boolean> = new Observable();
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private route: Router
  ) {}

  private initializeData(episodes: any): void {
    console.log(episodes);

    this.dataSource = new MatTableDataSource(
      episodes.length ? episodes : this.noData
    );
  }

  public ngAfterViewInit(): void {}

  toSearch(item: EpisodesResultI) {
    let ids:any[] = [];
    item.characters?.forEach((url) => {
      const lastUrlSegment = url.split('?')[0].split('/').pop();
      ids.push(lastUrlSegment);
    });



    this.route.navigate(['/characters/search', ids.join(',')]);
  }

  ngOnInit(): void {
    this.store.pipe(select(selectListEpisodes)).subscribe((episodes) => {
      this.loading$ = this.store.select(selectEpisodesLoading);

      this.initializeData(episodes.episodes);
    });

    this.store.pipe(select(searchGlobalTerm)).subscribe((term) => {
      this.store.dispatch(
        loadEpisodes({
          params: {
            page: 0,
            name: term,
          },
        })
      );
    });
  }
}
