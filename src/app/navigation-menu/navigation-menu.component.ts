import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { PageScrollService } from 'ngx-page-scroll-core';


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
  public container;
  constructor(
    public activeModal: NgbActiveModal,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.container = window.document.querySelector('.section-container');
    this.menuItems = [{
      label: 'About',
      section: 'biography'
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
    }, {
      label: 'Contact',
      section: 'contact'
    }
  ];
  }

  ngOnInit() {  }

  close() {
    this.activeModal.close(true);
  }

  scrollTo(menuItem: MenuItem) {
    this.close();
    this.pageScrollService.scroll({
      document: this.document,
      duration: 2000,
      _logLevel: 5,
      verticalScrolling: false,
      scrollTarget: `.${menuItem.section}`,
      // scrollViews: this.container
    });
  }

}
