import { Component, OnInit } from '@angular/core';
import { LocaldataService } from '../services/localdata/localdata.service';

export interface Image {
  path: string;
  content: any;
}

@Component({
  selector: 'app-image-feed',
  templateUrl: './image-feed.component.html',
  styleUrls: ['./image-feed.component.scss']
})
export class ImageFeedComponent implements OnInit {

  images: Image[];

  constructor(
    private localdataService: LocaldataService
  ) { }

  ngOnInit() {
    this.localdataService.getJSONDataAsync('./assets/images/gallery/images.json').then(data => {
      this.images = data;
      for (var i = this.images.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = this.images[randomIndex];
        this.images[randomIndex] = this.images[i];
        this.images[i] = itemAtIndex;
      }
    });
  }

}
