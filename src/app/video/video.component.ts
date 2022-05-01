import { Component, OnInit } from '@angular/core'; 
import db from '../../../db.json'
import { LinkService } from '../link.service';

@Component({
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  selector: 'app-video',
})
export class VideoComponent implements OnInit {

  public videosInfo = db.videos

  constructor(private linkService: LinkService) {

  }

 public linkClick($event: any) {
  this.linkService.changeID($event.target.id)
 }

  ngOnInit() {

  }
}
