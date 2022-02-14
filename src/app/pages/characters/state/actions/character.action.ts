import { ResultCharacterI } from '@interfaces';
import { createAction, props } from '@ngrx/store';

export const loadCharacter = createAction(
  '[Character Item] load Character',
  props<{ item: number }>()
);

export const loadedCharacter = createAction(
  '[Character Item] loaded Character',
  props<{ character: ResultCharacterI }>()
);
export const loadedCharacterFailure = createAction(
  '[Character Item] Loaded Failure',
  props<{ error: any }>()
);
