import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { MeComponent } from './me/me.component';
import { EtcComponent } from './etc/etc.component';
import { MainComponent } from './main/main.component';
import { DressComponent } from './dress/dress.component';
import { LampComponent } from './lamp/lamp.component';
import { SketchbookComponent } from './sketchbook/sketchbook.component';
import { ScreenprintingComponent } from './screenprinting/screenprinting.component';
import { MantisComponent } from './mantis/mantis.component';
import { SharkComponent } from './shark/shark.component';
import { UpdatesComponent } from './updates/updates.component';
import { RecipesComponent } from './recipes/recipes.component';
import { TeleportComponent } from './teleport/teleport.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'me', component: MeComponent },
  { path: 'etc', component: EtcComponent },
  { path: 'main', component: MainComponent },
  { path: 'dress', component: DressComponent },
  { path: 'lamp', component: LampComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: 'mantis', component: MantisComponent },
  { path: 'shark', component: SharkComponent },
  { path: 'sketchbook', component: SketchbookComponent },
  { path: 'screenprinting', component: ScreenprintingComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'teleport', component: TeleportComponent },
  { path: '**', component: MainComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
