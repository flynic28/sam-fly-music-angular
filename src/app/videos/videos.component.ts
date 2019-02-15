import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxY2PlayerComponent, NgxY2PlayerOptions } from 'ngx-y2-player';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  @ViewChild('video') video: NgxY2PlayerComponent;
  videoUrl = [
    'https://youtu.be/C0pE1Gw2OZk',
    'https://youtu.be/ViV6BnjPsd0',
    'https://youtu.be/HDeXVcua3eQ',
    'https://youtu.be/P5G-7pJwoUA'
  ];
  playerOptions: NgxY2PlayerOptions = {
    height: 'auto', // you can set 'auto', it will use container width to set size
    width: 'auto',
    // when container resize, it will call resize function, you can custom this by set resizeDebounceTime, default is 200
    resizeDebounceTime: 0,
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0
    },
  };
  constructor() { }

  ngOnInit() {
  }

}
