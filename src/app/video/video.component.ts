import { Component, OnInit } from '@angular/core'; 
import db from '../../../db.json'

@Component({
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  selector: 'app-video',
})
export class VideoComponent implements OnInit {

  public videosInfo = db.videos

 public linkClick($event: any) {

 }

  ngOnInit() {

  }
}
