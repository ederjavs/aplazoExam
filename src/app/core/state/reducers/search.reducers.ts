
import { createReducer, on, Action } from '@ngrx/store';
import { globalChangeSearchTerm } from '../actions/search.actions';

export const initialState: {
  term: string;
} = {
  term: '',
};

export const searchReducer = createReducer(
  initialState,
  on(globalChangeSearchTerm, (state, payload) => ({
    ...state,
    term: payload.term,
  }))
);
