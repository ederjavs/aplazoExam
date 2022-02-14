import { createReducer, on } from '@ngrx/store';

import { LocationsStateI } from '@interfaces';
import { loadLocations, loadedLocations } from '../actions/locations.actions';

export const initialState: LocationsStateI = {
  loading: false,
  locations: [],
};

export const locationsReducer = createReducer(
  initialState,
  on(loadLocations, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedLocations, (state, items) => {
    console.log('aca');

    console.log(items);

    return { ...state, loading: false, locations: items.locations };
  })
);
