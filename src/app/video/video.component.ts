import { Component, OnInit } from '@angular/core'; 
import db from '../../../db.json'
import { LinkService } from '../link.service';

@Component({
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  selector: 'app-video',
})
export class VideoComponent implements OnInit {
  public array: [] =  [];
  public sum = 8;
  public direction = "";
  
  public videoList: Array<any> = [];

  public videosInfo = db.videos

  constructor(private linkService: LinkService) {
    this.appendItems(0, this.sum);
    for (let i = 0; i <= 8; i++) {
      this.loadNewData();
  }
}

// Полученаем id видео и записываем в linkService

 public linkClick($event: any) {
  this.linkService.changeID($event.target.id)
 }

// Подгрузка элементов

ngAfterViewInit(): void {
  document.addEventListener("scroll", () => {
    this.onScroll();
  });
}

public onScroll() {
  if (this.isCameraTouchesBottom()) {
    this.loadNewData();
  }
}

private isCameraTouchesBottom(): boolean {
  return (document.body.offsetHeight + document.body.offsetTop <= window.scrollY + window.innerHeight + 2);
}


private videosLoaded: number = 0;

public loadNewData(): void {
  if (this.videosLoaded >= this.videosInfo.length) return;

  this.videoList = [...this.videoList, this.videosInfo[this.videosLoaded]]
  this.videosLoaded++;
}

public addItems(startIndex:number, endIndex:number, _method:string) {
  for (let i = 0; i < this.sum; i++) {
    //@ts-ignore
    this.array[_method]([this.videosInfo]);
  }
  
}

public appendItems(startIndex:number, endIndex:number) {
  this.addItems(startIndex, endIndex, "push");
}

public onScrollDown() {

  const start = this.sum;
  this.sum += 4;
  this.appendItems(start, this.sum);

  this.direction = "down";
}


 ngOnInit(): void {
 
}

}