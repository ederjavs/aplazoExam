import { Injectable } from '@angular/core';
import { CosrService } from '@cors';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class CharacterEffects {
  loadCharacter$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Character Item] load Character'),
        mergeMap((id) =>
          this.corsService.getCharacter(id).pipe(
            map((character) => ({
              type: '[Character Item] loaded Character',
              character,
            })),
            catchError(() => EMPTY)
          )
        )
      ),
    { dispatch: true }
  );

  constructor(private actions$: Actions, private corsService: CosrService) {}
}
