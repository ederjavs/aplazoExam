import {
  characterSearhcQuery,
  ResultCharacterI,
} from '@interfaces';
import { createAction, props } from '@ngrx/store';

export const loadCharacters = createAction(
  '[Characters List] load Characters',
  props<{ params: characterSearhcQuery   }>()
);


export const loadedCharacters = createAction(
  '[Characters List] loaded Characters',
  props<{ characters: Array<ResultCharacterI> }>()
);
export const loadedCharactersFailure = createAction(
  '[Characters List] Loaded Failure',
  props<{ error: any }>()
);
