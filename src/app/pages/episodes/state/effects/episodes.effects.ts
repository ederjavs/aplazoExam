import { Injectable } from '@angular/core';
import { CosrService } from '@cors';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';


@Injectable()
export class EpisodesEffects {
  loadEpisodes$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Episodes List] load Episodes'),
        mergeMap((payload) =>
          this.corsService.getEpisodes(payload).pipe(
            map((episodes) => ({
              type: '[Episodes List] loaded Episodes',
              episodes,
            })),
            catchError(() => EMPTY)
          )
        )
      ),
    { dispatch: true }
  );

  constructor(private actions$: Actions, private corsService: CosrService) {}
}
