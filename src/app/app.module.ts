import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { LayoutComponent } from '@layout';
import { MaterialModule } from '@material';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './core/app.state';
import { CharactersEffects } from './pages/characters/state/effects/characters.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';
import { CharacterEffects } from './pages/characters/state/effects/character.effect';
import { EpisodesEffects } from './pages/episodes/state/effects/episodes.effects';
import { LocationsEffects } from './pages/locations/state/effects/locations.effects';



@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([
      CharactersEffects,
      CharacterEffects,
      EpisodesEffects,
      LocationsEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
