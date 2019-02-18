import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface MenuItem {
  label: string;
  section: string;
}
@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  menuItems: MenuItem[];

  constructor(
    public activeModal: NgbActiveModal
  ) {
    this.menuItems = [{
      label: 'About',
      section: 'Biography'
    }, {
      label: 'Instagram',
      section: 'instagram-feed'
    }, {
      label: 'Video',
      section: 'videos'
    }, {
      label: 'Gallery',
      section: 'image-feed'
    }, {
      label: 'Music',
      section: 'music'
    }];
  }

  ngOnInit() {  }

  close() {
    this.activeModal.close(true);
  }

}
