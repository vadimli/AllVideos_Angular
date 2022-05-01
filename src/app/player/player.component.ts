import { Component, OnInit } from '@angular/core';
import db from '../../../db.json'
import { LinkService } from '../link.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

public videosInfo: any = db.videos

public activeId: number = 0

public commentForm: any = {
  name: '',
  comment: '',
}

  constructor(private linkService: LinkService) { 
  }

  onclickFormButton() {
    console.log(this.commentForm);
    
    
  }

  ngOnInit(): void {
    this.activeId = this.linkService.getLinkedVideoId;
    
    

    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

}
