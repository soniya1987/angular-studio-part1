import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { CrewComponent } from './crew/crew.component';
import { ExperimentsComponent } from './experiments/experiments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EquipmentComponent,
    CrewComponent,
    ExperimentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
