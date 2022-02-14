import {
  CharactersStateI,
  CharacterStateI,
  SearchStateI,
  EpisodesStateI,
  LocationsStateI,
} from '@interfaces';
import { ActionReducerMap } from '@ngrx/store';
import { characterReducer } from '../pages/characters/state/reducers/character.reducer';
import { charactersReducer } from '../pages/characters/state/reducers/characters.reducer';
import { episodesReducer } from '../pages/episodes/state/reducers/episodes.reducer';
import { locationsReducer } from '../pages/locations/state/reducers/locations.reducer';
import { searchReducer } from './state/reducers/search.reducers';

export interface AppState {
  characters: CharactersStateI;
  character: CharacterStateI;
  episodes: EpisodesStateI;
  locations: LocationsStateI;
  search: SearchStateI;
}



export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  characters: charactersReducer,
  character: characterReducer,
  episodes: episodesReducer,
  locations: locationsReducer,
  search: searchReducer,
};
