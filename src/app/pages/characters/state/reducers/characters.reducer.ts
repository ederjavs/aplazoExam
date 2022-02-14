import { createReducer, on } from '@ngrx/store';

import { CharactersStateI, ResultCharacterI } from '@interfaces';
import {
  loadCharacters,
  loadedCharacters,
} from '../actions/characters.actions';

export const initialState: CharactersStateI = {
  loading: false,
  characters: [],
};

export const charactersReducer = createReducer(
  initialState,
  on(loadCharacters, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedCharacters, (state, items) => {
    console.log('aca');

    console.log(items);

    return { ...state, loading: false, characters: items.characters };
  })
);
