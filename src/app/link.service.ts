import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

    public getLinkedVideoId: number = 0;

    public changeID(id: number): void {
      this.getLinkedVideoId = id;
    }
 }
