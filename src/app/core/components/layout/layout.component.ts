import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadCharacters,
  loadedCharacters,
} from 'src/app/pages/characters/state/actions/characters.actions';
import { AppState } from '../../app.state';
import { globalChangeSearchTerm } from '../../state/actions/search.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  term: string = '';
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {

  }

  clear() {
    this.term = '';
    this.store.dispatch(globalChangeSearchTerm({ term: '' }));
  }

  searchTermChange() {
    this.store.dispatch(globalChangeSearchTerm({ term: this.term }));
  }
}
