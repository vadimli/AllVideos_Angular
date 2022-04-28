import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllVideosPageComponent } from './all-videos-page/all-videos-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AllVideosPageModule } from './all-videos-page/all-videos-page.module';
import { VideoComponent } from './video/video.component';
import { PlayerModule } from './player/player.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllVideosPageComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AllVideosPageModule,
    PlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
