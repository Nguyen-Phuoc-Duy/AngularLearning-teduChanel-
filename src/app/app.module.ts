import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import {HeroChildComponent } from './hero-child.component'
import {HeroParentComponent} from './hero-parent.component'
import { NameParentComponent } from './name-parent.component';
import { NameChildComponent } from './name-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VersionChildComponent } from './version-child.component';
import { VoteTakerComponent } from './votetaker.component';
import { VoterComponent } from './voter.component';
import { CountdownTimerComponent } from './countdown-timer.component';
import { CountdownLocalVarParentComponent } from './countdown-parent.component';
import { CountdownViewChildParentComponent } from './countdown-parent.component-vc';
import { MissionControlComponent } from './missioncontrol.component';
import { AstronautComponent } from './astronaut.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ParentComponent,
    ChildComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    VoteTakerComponent,
    VoterComponent,
    CountdownTimerComponent,
    CountdownLocalVarParentComponent,
    CountdownViewChildParentComponent,
    AstronautComponent,
    MissionControlComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
