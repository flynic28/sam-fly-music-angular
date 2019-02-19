import { Component, OnInit } from '@angular/core';

export interface SocialIcon {
  icon: string;
  url: string;
  display: boolean;
}

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent implements OnInit {

  socialIcons: SocialIcon[];

  constructor() {
    this.socialIcons = [{
      icon: 'twitter',
      url: 'https://twitter.com/samflymusic',
      display: true
    }, {
      icon: 'facebook',
      url: 'https://www.facebook.com/samflymusic',
      display: true
    }, {
      icon: 'soundcloud',
      url: 'https://soundcloud.com/sam-fly-music',
      display: true
    }, {
      icon: 'instagram',
      url: 'https://www.instagram.com/samflymusic/',
      display: true
    }];
  }

  ngOnInit() {
  }

  goToSocial(socialIcon: SocialIcon) {
    window.open(socialIcon.url, '_blank');
  }
  
}
