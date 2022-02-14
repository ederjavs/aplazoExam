import { LocationsSearhcQuery, LocationsResult } from '@interfaces';
import { createAction, props } from '@ngrx/store';

export const loadLocations = createAction(
  '[Locations List] load Locations',
  props<{ params: LocationsSearhcQuery }>()
);


export const loadedLocations = createAction(
  '[Locations List] loaded Locations',
  props<{ locations: Array<LocationsResult> }>()
);
export const loadedLocationsFailure = createAction(
  '[Locations List] Loaded Failure',
  props<{ error: any }>()
);
