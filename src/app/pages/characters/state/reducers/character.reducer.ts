import { createReducer, on } from '@ngrx/store';

import { CharacterStateI } from '@interfaces';
import { loadCharacter, loadedCharacter } from '../actions/character.action';


export const initialState: CharacterStateI = {
  loading: false,
  character: {},
};

export const characterReducer = createReducer(
  initialState,
  on(loadCharacter, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedCharacter, (state, items) => {


    return { ...state, loading: false, character: items.character };
  })
);
