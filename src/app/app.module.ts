import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ClockComponent } from './clock.component';
import { SettingsComponent } from './settings.component';
import { SettingsButton } from './settings-button.component';
import { AboutComponent } from './about.component';
import { AppComponent }  from './app.component';
import { MainComponent } from './main.component';
import { MaterialModule } from '@angular/material';

export const routeConfig: Routes = [
  {
    path:       'main',
    redirectTo: '',
    pathMatch:  'full'
  },
  {
    path:       'settings',
    component:  SettingsComponent
  },
  {
    path:       'about',
    component:  AboutComponent
  },
  {
    path:       '',
    component:  MainComponent
  }
];

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    SettingsComponent,
    ClockComponent,
    SettingsButton,
    AboutComponent,
    MainComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }