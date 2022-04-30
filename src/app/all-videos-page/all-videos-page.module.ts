import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { HeaderComponent } from '../header/header.component';
import { AllVideosPageComponent } from './all-videos-page.component';

@NgModule({
  declarations: [
    // AppComponent,
    // HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class AllVideosPageModule { }