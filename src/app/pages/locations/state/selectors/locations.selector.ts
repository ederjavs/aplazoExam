import { LocationsI, LocationsStateI } from '@interfaces';
import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/core/app.state';

export const selectLocationsFeature = (state: AppState) => state.locations;

export const selectListLocations = createSelector(
  selectLocationsFeature,
  (state: LocationsStateI) => state
);

export const selectLocationsLoading = createSelector(
  selectLocationsFeature,
  (state: LocationsStateI) => state.loading
);
