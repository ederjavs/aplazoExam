import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError, map } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  LocationsResult,
  ResultCharacterI,
  EpisodesI,
  EpisodesResultI,
  LocationsI,
} from '@interfaces';
@Injectable({
  providedIn: 'root',
})
export class CosrService {
  constructor(private http: HttpClient) {}

  getCharacters(params: any): Observable<ResultCharacterI[]> {
    console.log(params);

    return this.http
      .get(
        environment.apiURL +
          `character/${params.params.characters || ''}?name=${
            params.params.name || ''
          }`
      )

      .pipe(
        map((result: any) => {
          if (result.results != undefined) {
            return result.results;
          } else {
            return result;
          }
        }),
        catchError(this.handleError)
      );
  }

  getCharacter(data: any): Observable<ResultCharacterI> {
    console.log(data);

    return this.http
      .get<ResultCharacterI>(environment.apiURL + 'character/' + data.item)
      .pipe(retry(1), catchError(this.handleError));
  }

  getEpisodes(params: any): Observable<EpisodesResultI[]> {
    console.log(params);

    return this.http
      .get<EpisodesI>(
        environment.apiURL +
          `episode?name=${
            params.params.name || ''
          }`
      )

      .pipe(
        map((result) => result.results),
        catchError(this.handleError)
      );
  }

  getLocations(params: any): Observable<LocationsResult[]> {
    console.log(params);

    return this.http
      .get<LocationsI>(
        environment.apiURL +
          `location?name=${
            params.params.name || ''
          }`
      )

      .pipe(
        map((result) => result.results),
        catchError(this.handleError)
      );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
