import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { VideoComponent } from './video.component';

@NgModule({
  imports: [
    YouTubePlayerModule,
    FormsModule,
    CommonModule
  ],
  declarations: [VideoComponent],
  exports: [VideoComponent]
})
export class VideoModule {}