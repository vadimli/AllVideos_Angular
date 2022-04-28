import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { PlayerComponent } from './player.component';

@NgModule({
  imports: [
    YouTubePlayerModule,
    FormsModule,
    CommonModule
  ],
  declarations: [PlayerComponent],
  exports: [PlayerComponent]
})
export class PlayerModule {}