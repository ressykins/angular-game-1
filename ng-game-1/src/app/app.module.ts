import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { OverworldComponent } from './overworld/overworld.component';
import { CombatComponent } from './combat/combat.component';
import { GameOverComponent } from './game-over/game-over.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TitleScreenComponent,
    OverworldComponent,
    CombatComponent,
    GameOverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
