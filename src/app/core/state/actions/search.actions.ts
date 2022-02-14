import { createAction, props } from '@ngrx/store';

export const globalChangeSearchTerm = createAction(
  '[Global] Change Search Term',
  props<{ term: string }>()
);
