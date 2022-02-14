import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultCharacterI } from '@interfaces';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/app.state';
import { loadCharacter } from '../state/actions/character.action';
import {
  selectCharacterLoading,
  selectShowCharacter,
} from '../state/selectors/character.selector';

@Component({
  selector: 'app-details-characters',
  templateUrl: './details-characters.component.html',
  styleUrls: ['./details-characters.component.scss'],
})
export class DetailsCharactersComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();

  character: ResultCharacterI = {};

  constructor(

    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,

  ) {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['itemId'];
      this.store.dispatch(
        loadCharacter({
          item: id,
        })
      );

      this.store.pipe(select(selectShowCharacter)).subscribe((character) => {
        console.info(character);
        this.character = character
        this.loading$ = this.store.select(selectCharacterLoading);
      });
    });
  }

  ngOnInit(): void {}
}
