import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { OverworldComponent } from './overworld/overworld.component';
import { CombatComponent } from './combat/combat.component';

const routes: Routes = [
  {path: '', component: TitleScreenComponent},
  {path: 'hub', component: OverworldComponent},
  {path: 'battle', component: CombatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
