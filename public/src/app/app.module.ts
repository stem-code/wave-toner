import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToneGraphComponent } from './tone-graph/tone-graph.component';

import { FormsModule } from '@angular/forms';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { FileWindowComponent } from './file-window/file-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ToneGraphComponent,
    TitleScreenComponent,
    SettingsComponent,
    HelpComponent,
    FileWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
