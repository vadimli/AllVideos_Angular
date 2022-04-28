import { Component, OnInit } from '@angular/core';
import db from '../../../db.json'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

public videosInfo: any = db.videos
public videoToken: string = this.videosInfo[0].token

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

}
