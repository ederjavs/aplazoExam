import { Injectable } from '@angular/core';
import { CosrService } from '@cors';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';


@Injectable()
export class LocationsEffects {
  loadLocations$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Locations List] load Locations'),
        mergeMap((payload) =>
          this.corsService.getLocations(payload).pipe(
            map((locations) => ({
              type: '[Locations List] loaded Locations',
              locations,
            })),
            catchError(() => EMPTY)
          )
        )
      ),
    { dispatch: true }
  );

  constructor(private actions$: Actions, private corsService: CosrService) {}
}
