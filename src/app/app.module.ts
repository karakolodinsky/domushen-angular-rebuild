import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { CharacterComponent } from './character/character.component';
import { MeComponent } from './me/me.component';
import { EtcComponent } from './etc/etc.component';
import { ProjectsComponent } from './projects/projects.component';
import { ScreenprintingComponent } from './screenprinting/screenprinting.component';
import { SketchbookComponent } from './sketchbook/sketchbook.component';
import { DressComponent } from './dress/dress.component';
import { LampComponent } from './lamp/lamp.component';
import { SharkComponent } from './shark/shark.component';
import { MantisComponent } from './mantis/mantis.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    CharacterComponent,
    MeComponent,
    EtcComponent,
    ProjectsComponent,
    ScreenprintingComponent,
    SketchbookComponent,
    DressComponent,
    LampComponent,
    SharkComponent,
    MantisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
