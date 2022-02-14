import { Injectable } from '@angular/core';
import { CosrService } from '@cors';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';


@Injectable()
export class CharactersEffects {
  loadCharacters$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Characters List] load Characters'),
        mergeMap((payload) =>
          this.corsService.getCharacters(payload).pipe(
            map((characters) => ({
              type: '[Characters List] loaded Characters',
              characters,
            })),
            catchError(() => EMPTY)
          )
        )
      ),
    { dispatch: true }
  );

  constructor(private actions$: Actions, private corsService: CosrService) {}
}
