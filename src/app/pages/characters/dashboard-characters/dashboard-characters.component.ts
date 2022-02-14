import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/app.state';
import {
  selectListCharacters,
  selectCharactersLoading,
} from '../state/selectors/characters.selector';
import { ResultCharacterI } from '@interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { searchGlobalTerm } from 'src/app/core/state/slectors/search.selector';
import { loadCharacters } from '../state/actions/characters.actions';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-dashboard-characters',
  templateUrl: './dashboard-characters.component.html',
  styleUrls: ['./dashboard-characters.component.scss'],
})
export class DashboardCharactersComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'image',
    'name',
    'gender',
    'species',
    'created',
  ];

  public dataSource: MatTableDataSource<ResultCharacterI> =
    new MatTableDataSource();
  public customerTotal: number = 0;
  public noData: ResultCharacterI[] = [<ResultCharacterI>{}];
  loading$: Observable<boolean> = new Observable();
  ids?: string;
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.ids = params['characters'];
    });
  }

  private initializeData(characters: any): void {
    console.log(characters);

    this.dataSource = new MatTableDataSource(
      characters.length ? characters : this.noData
    );
  }

  searchInitData() {
    this.store.pipe(select(selectListCharacters)).subscribe((characters) => {
      this.loading$ = this.store.select(selectCharactersLoading);

      this.initializeData(characters.characters);
    });
    this.store.pipe(select(searchGlobalTerm)).subscribe((term) => {
      this.store.dispatch(
        loadCharacters({
          params: {
            characters: this.ids || '',
            name: term,
          },
        })
      );
    });
  }

  ngOnInit(): void {
    this.searchInitData();
  }
}
